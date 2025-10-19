const BASE_API_URL = process.env.NODE_ENV === 'production' ? 'https://mainasutto.com' : 'http://localhost:3001';

/**
 * Fetches post data from a given post object.
 *
 * @param postId - The postId to fetch data for.
 * @returns - The post data object containing various properties such as id, date, image, markdown, preview, html, and titlePreview. Returns null if there was an error fetching the post content.
 */
export const fetchPostData = async (postId: number) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/blog/posts/${postId}`).then((res) => res.json());
    return res;
  } catch (error) {
    console.error('Error fetching post content', error);
  }

  return null;
};

/**
 * Fetches post data for a given post.
 *
 * @param postId - The postId to fetch data for.
 * @returns - A promise that resolves to the post data, or null if an error occurs.
 */
export const getPostData = async (postId: number) => {
  try {
    const postData = await fetchPostData(postId);
    return postData;
  } catch (error) {
    console.error('Error fetching post data', error);
  }

  return null;
};

/**
 * Fetches a list of posts per page from the API.
 *
 * @param page - The page number to fetch.
 * @returns - A promise that resolves to an array of posts.
 */
export const getPostsPerPage = async (page: number) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/blog/posts?page=${page}`).then((res) => res.json());
    return res;
  } catch (error) {
    console.error('Error fetching all post data', error);
  }

  return [];
};
