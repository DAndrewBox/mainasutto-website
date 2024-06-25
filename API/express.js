const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const { getPostDataParsed } = require('./utils');

const app = express();
const baseURL = process.env.API_BASE_URL || '/api';
const port = process.env.API_PORT || 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static('blog'));

app.get(baseURL + '/blog/posts', async (req, res) => {
  const POSTS_PER_PAGE = 8;
  try {
    const { page } = req.query;
    const firstIndex = Number(page) * POSTS_PER_PAGE;
    const data = fs.readFileSync(path.join(__dirname, '/blog/index.json'), 'utf8');
    const selectedData = JSON.parse(data)
      .sort((a, b) => b.date - a.date)
      .slice(firstIndex, firstIndex + POSTS_PER_PAGE - 1);
    const dataParsed = await Promise.all(selectedData.map((post) => getPostDataParsed(post))).then((data) => data);
    const hasNewerPage = firstIndex > 0;
    const hasOlderPage = firstIndex + POSTS_PER_PAGE < JSON.parse(data).length;

    res.send({
      posts: dataParsed.map((post) => {
        delete post.markdown;
        delete post.filepath;
        delete post.title;
        delete post.html;
        return post;
      }),
      hasNewerPage,
      hasOlderPage,
    });
  } catch (e) {
    res.status(500).send({ error: e.message, posts: [], hasNewerPage: false, hasOlderPage: false });
  }
});

app.get(baseURL + '/blog/posts/:id', async (req, res) => {
  try {
    const data = require(path.join(__dirname, '/blog/index.json')).sort((a, b) => b.date - a.date);
    const post = data.find((post) => Number(post.date) === Number(req.params.id));

    if (post) {
      const dataParsed = await getPostDataParsed(post);
      const currentIndex = data.findIndex((p) => p.date === post.date);
      let previousPost = currentIndex < data.length - 1 ? data[currentIndex + 1] : null;
      let nextPost = currentIndex > 0 ? data[currentIndex - 1] : null;

      delete dataParsed.markdown;
      delete dataParsed.preview;
      delete dataParsed.filepath;

      if (previousPost) {
        previousPost = {
          id: previousPost.date,
          title: previousPost.title,
        };
      }

      if (nextPost) {
        nextPost = {
          id: nextPost.date,
          title: nextPost.title,
        };
      }

      const dataToSend = {
        post: dataParsed,
        previousPost,
        nextPost,
      };

      res.send(dataToSend);
      return;
    }
    res.status(404).send({ error: 'Post not found', data: null });
  } catch (e) {
    res.status(500).send({ error: e.message, data: null });
  }
});

app.get(baseURL + '/releases/:path/:file', async (req, res) => {
  try {
    const filepath = path.join(__dirname, '/releases/', req.params.path, '/', req.params.file);
    res.download(filepath);
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e.message, data: null });
  }
});

module.exports = { app, port };
