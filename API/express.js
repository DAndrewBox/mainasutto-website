const express = require('express')
const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch');
require('dotenv').config()
const { getPostDataParsed } = require('./utils')

const app = express()
const baseURL = process.env.API_BASE_URL || '/api'
const port = process.env.API_PORT || 3001

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.static('blog'))

app.get(baseURL + '/blog/posts', async (req, res) => {
  const POSTS_PER_PAGE = 8
  try {
    const { page } = req.query
    const firstIndex = Number(page) * POSTS_PER_PAGE
    const data = fs.readFileSync(path.join(__dirname, '/blog/index.json'), 'utf8')
    const selectedData = JSON.parse(data)
      .sort((a, b) => b.date - a.date)
      .slice(firstIndex, firstIndex + POSTS_PER_PAGE - 1)
    const dataParsed = await Promise.all(selectedData.map((post) => getPostDataParsed(post))).then((data) => data)
    const hasNewerPage = firstIndex > 0
    const hasOlderPage = firstIndex + POSTS_PER_PAGE < JSON.parse(data).length

    res.send({
      posts: dataParsed.map((post) => {
        delete post.markdown
        delete post.filepath
        delete post.title
        delete post.html
        return post
      }),
      hasNewerPage,
      hasOlderPage,
    })
  } catch (e) {
    res.status(500).send({ error: e.message, posts: [], hasNewerPage: false, hasOlderPage: false })
  }
})

app.get(baseURL + '/blog/posts/:id', async (req, res) => {
  try {
    const data = require(path.join(__dirname, '/blog/index.json')).sort((a, b) => b.date - a.date)
    const post = data.find((post) => Number(post.date) === Number(req.params.id))

    if (post) {
      const dataParsed = await getPostDataParsed(post)
      const currentIndex = data.findIndex((p) => p.date === post.date)
      let previousPost = currentIndex < data.length - 1 ? data[currentIndex + 1] : null
      let nextPost = currentIndex > 0 ? data[currentIndex - 1] : null

      delete dataParsed.markdown
      delete dataParsed.preview
      delete dataParsed.filepath

      if (previousPost) {
        previousPost = {
          id: previousPost.date,
          title: previousPost.title,
        }
      }

      if (nextPost) {
        nextPost = {
          id: nextPost.date,
          title: nextPost.title,
        }
      }

      const dataToSend = {
        post: dataParsed,
        previousPost,
        nextPost,
      }

      res.send(dataToSend)
      return
    }
    res.status(404).send({ error: 'Post not found', data: null })
  } catch (e) {
    res.status(500).send({ error: e.message, data: null })
  }
})

app.get(baseURL + '/releases/:path/:file', async (req, res) => {
  try {
    const filepath = path.join(__dirname, '/releases/', req.params.path, '/', req.params.file)
    res.download(filepath)
  } catch (e) {
    console.log(e)
    res.status(500).send({ error: e.message, data: null })
  }
})

app.get(baseURL + '/proxy-image', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send({ error: 'URL parameter is required' });
  }

  // Optional: Add security by allowing only specific domains
  const allowedDomains = ['forums.tigsource.com', 'cdn.discordapp.com'];
  try {
    const urlObj = new URL(url);
    if (!allowedDomains.includes(urlObj.hostname)) {
      return res.status(403).send({ error: 'Domain not allowed' });
    }
  } catch (e) {
    return res.status(400).send({ error: 'Invalid URL' });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      return res.status(response.status).send({ error: 'Failed to fetch image' });
    }

    // Get the image data as a buffer
    const imageBuffer = await response.arrayBuffer();

    // Get content type from the original response
    const contentType = response.headers.get('content-type') || 'image/gif';

    // Set proper headers
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Send the image
    res.send(Buffer.from(imageBuffer));
  } catch (error) {
    console.error('Proxy image error:', error);
    res.status(500).send({ error: 'Error fetching image' });
  }
});

module.exports = { app, port }
