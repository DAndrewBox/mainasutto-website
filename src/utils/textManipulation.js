/**
 * Slices the given text to a specified length and adds ellipsis if necessary.
 *
 * @param {string} text - The text to be sliced.
 * @param {number} length - The maximum length of the sliced text.
 * @returns {string} - The sliced text with ellipsis if necessary.
 */
export const textSlice = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length).split(' ').slice(0, -1).join(' ') + '...';
  }

  return text;
};
