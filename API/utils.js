const { marked } = require('marked')
const path = require('path')
const fs = require('fs')

const iconsMap = {
  ':shrug:': '617372581959565326',
  ':smiley:': '617372581972148244',
  ':giggle:': '617372582102171666',
  ':coffee:': '617372581598724194',
  ':wink:': '617372581812764673',
  ':gentleman:': '617372581703712769',
  ':sad:': '617372582013829124',
  ':hf_angry:': '795851343867674674',
  ':hf_confused:': '795851343956279316',
  ':hf_happy:': '795851343548907542',
  ':hf_sad:': '1103507246593355837',
  ':hf_surprised:': '795851343830188072',
  ':hf_thinking:': '1143686589516632164',
  ':hf_sweat:': '1103508919642488842',
  ':hmm:': '795851344040820826',
  ':wb_yay:': '795851343809871903',
  ':wb_sus:': '795851343956803615',
  ':wb_nay:': '795851343595438132',
  ':yay:': '499036186346520587',
}

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
  const keys = Object.keys(iconsMap)
  const regex = new RegExp(keys.join('|'), 'g')

  let newHtml = html.replace(
    regex,
    (match) =>
      `<img src="https://cdn.discordapp.com/emojis/${iconsMap[match]}.webp?size=16&animated=true" alt="${match}" crossOrigin="anonymous" align="center" valign="middle" vspace="5" hspace="5" />`,
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
  const postImage = post?.image ?? 'https://placehold.co/600x400/0e0e30/FFFFFF?text=Image+Not+Found&font=PT Sans'

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
