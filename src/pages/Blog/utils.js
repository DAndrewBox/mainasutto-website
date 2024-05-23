import { marked } from 'marked';
import { getDateString } from '@utils/datetime';

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
  };

  const keys = Object.keys(icons);
  let newHtml = html;

  keys.forEach((key) => {
    newHtml = newHtml.replaceAll(
      key,
      `<img src="${icons[key]}" alt="${key}" align="center" valign="middle" vspace="5" hspace="5" />`
    );
  });

  return newHtml;
};


/**
 * Slices the given text to a specified length and adds ellipsis if necessary.
 *
 * @param {string} text - The text to be sliced.
 * @param {number} length - The maximum length of the sliced text.
 * @returns {string} - The sliced text with ellipsis if necessary.
 */
const textSlice = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length).split(' ').slice(0, -1).join(' ') + '...';
  }

  return text;
};


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
  const file = require(`@posts/${post.filepath}`);
  let markdown = '';
  let preview = '';

  const html = await fetch(file)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      markdown = text;
      preview = addIcons(marked(textSlice(text, 256)));
      return marked(text);
    });

  const titlePreview = textSlice(post.title, 32);
  const date = new Date(post.date * 1000);
  const dateString = getDateString(date);
  let postImage = '';

  try {
    postImage = post.image.includes('http') ? post.image : require(`@assets/images/posts/${post.image}`).default;
  } catch (error) {
    postImage = 'https://via.placeholder.com/300x200.png?text=Image+Not+Found';
  }

  const htmlWithIcons = addIcons(html);

  return {
    ...post,
    id: post.date,
    date: dateString,
    image: postImage,
    markdown,
    preview,
    html: htmlWithIcons,
    titlePreview,
  };
};

/**
 * Fetches post data from a given post object.
 *
 * @param {Object} post - The post object containing information about the post.
 * @param {string} post.filepath - The filepath of the post.
 * @param {number} post.date - The date of the post in Unix timestamp format.
 * @param {string} post.image - The image URL or filepath of the post.
 * @param {string} post.title - The title of the post.
 * @returns {Object|null} - The post data object containing various properties such as id, date, image, markdown, preview, html, and titlePreview. Returns null if there was an error fetching the post content.
 */
export const fetchPostData = async (post) => {
  try {
    return await getPostDataParsed(post);
  } catch (error) {
    console.error('Error fetching post content', error);
  }

  return null;
};

/**
 * Fetches post data for a given post.
 *
 * @param {string} post - The post to fetch data for.
 * @returns {Promise<Object|null>} - A promise that resolves to the post data, or null if an error occurs.
 */
export const getPostData = async (post) => {
  try {
    const postData = await fetchPostData(post);
    return postData;
  } catch (error) {
    console.error('Error fetching post data', error);
  }

  return null;
};
