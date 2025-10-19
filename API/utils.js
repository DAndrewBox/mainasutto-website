const { marked } = require('marked')
const path = require('path')
const fs = require('fs')

/**
 * Fixes the month value by adding a leading zero if it is less than 10.
 *
 * @param {number} month - The month value to fix.
 * @returns {string} - The fixed month value as a string.
 */
const fixMonth = (month) => {
  return month < 10 ? '0' + month : month
}

/**
 * Fixes the day value by adding a leading zero if it's less than 10.
 *
 * @param {number} day - The day value to fix.
 * @returns {string} - The fixed day value as a string.
 */
const fixDay = (day) => {
  return day < 10 ? '0' + day : day
}

/**
 * Returns a formatted date string in the format 'YYYY-MM-DD'.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string.
 */
const getDateString = (date) => {
  return date.getFullYear() + '-' + fixMonth(date.getMonth() + 1) + '-' + fixDay(date.getDate())
}

/**
 * Replaces specific strings in the given HTML with corresponding image tags.
 *
 * @param {string} html - The HTML content to modify.
 * @returns {string} The modified HTML content with replaced strings.
 */
const addIcons = (html) => {
  const icons = {
    ':shrug:': 'https://forums.tigsource.com/Smileys/derek/shrug.gif',
    ':smiley:': 'https://forums.tigsource.com/Smileys/derek/smiley.gif',
    ':giggle:': 'https://forums.tigsource.com/Smileys/derek/giggle.gif',
    ':coffee:': 'https://forums.tigsource.com/Smileys/derek/coffee-toast.gif',
    ':wink:': 'https://forums.tigsource.com/Smileys/derek/wink.gif',
    ':gentleman:': 'https://forums.tigsource.com/Smileys/derek/gentleman.gif',
    ':sad:': 'https://forums.tigsource.com/Smileys/derek/sad.gif',
    ':hf_angry:': 'https://cdn.discordapp.com/emojis/795851343867674674.webp',
    ':hf_confused:': 'https://cdn.discordapp.com/emojis/795851343956279316.webp',
    ':hf_happy:': 'https://cdn.discordapp.com/emojis/795851343548907542.webp',
    ':hf_sad:': 'https://cdn.discordapp.com/emojis/1103507246593355837.webp',
    ':hf_surprised:': 'https://cdn.discordapp.com/emojis/795851343830188072.webp',
    ':hf_thinking:': 'https://cdn.discordapp.com/emojis/1143686589516632164.webp',
    ':hf_sweat:': 'https://cdn.discordapp.com/emojis/1103508919642488842.webp',
    ':hmm:': 'https://cdn.discordapp.com/emojis/795851344040820826.webp',
    ':wb_yay:': 'https://cdn.discordapp.com/emojis/795851343809871903.webp',
    ':wb_sus:': 'https://cdn.discordapp.com/emojis/795851343956803615.webp',
    ':wb_nay:': 'https://cdn.discordapp.com/emojis/795851343595438132.webp',
    ':yay:': 'https://cdn.discordapp.com/emojis/499036186346520587.webp',
  }

  const keys = Object.keys(icons)
  const regex = new RegExp(keys.join('|'), 'g')
  let newHtml = html.replace(
    regex,
    (match) =>
      `<img src="${icons[match]}?size=16" alt="${match}" align="center" valign="middle" vspace="5" hspace="5" />`,
  )

  return newHtml
}

/**
 * Slices the given text to a specified length and adds ellipsis if necessary.
 *
 * @param {string} text - The text to be sliced.
 * @param {number} length - The maximum length of the sliced text.
 * @returns {string} - The sliced text with ellipsis if necessary.
 */
const textSlice = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length).split(' ').slice(0, -1).join(' ') + '...'
  }

  return text
}

/**
 * Retrieves and parses data for a blog post.
 *
 * @param {Object} post - The blog post object.
 * @param {string} post.filepath - The filepath of the blog post.
 * @param {string} post.title - The title of the blog post.
 * @param {number} post.date - The date of the blog post in Unix timestamp format.
 * @param {string} post.image - The image URL or filepath of the blog post.
 * @returns {Object} - The parsed blog post data.
 */
const getPostDataParsed = async (post) => {
  const filepath = path.join(__dirname, `/blog/${post.filepath}`)
  const markdown = fs.readFileSync(filepath, 'utf8')
  const preview = addIcons(marked(textSlice(markdown, 256)))
  const html = addIcons(marked(markdown))

  const titlePreview = textSlice(post.title, 32)
  const date = new Date(post.date * 1000)
  const dateString = getDateString(date)
  const postImage = post?.image ?? 'https://via.placeholder.com/300x200.png?text=Image+Not+Found'

  return {
    ...post,
    id: post.date,
    date: dateString,
    image: postImage,
    markdown,
    preview,
    html,
    titlePreview,
  }
}

module.exports = { getPostDataParsed }
