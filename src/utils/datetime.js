/**
 * Fixes the month value by adding a leading zero if it is less than 10.
 *
 * @param {number} month - The month value to fix.
 * @returns {string} - The fixed month value as a string.
 */
export const fixMonth = (month) => {
  return month < 10 ? '0' + month : month;
};

/**
 * Fixes the day value by adding a leading zero if it's less than 10.
 *
 * @param {number} day - The day value to fix.
 * @returns {string} - The fixed day value as a string.
 */
export const fixDay = (day) => {
  return day < 10 ? '0' + day : day;
};

/**
 * Returns a formatted date string in the format 'YYYY-MM-DD'.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string.
 */
export const getDateString = (date) => {
  return date.getFullYear() + '-' + fixMonth(date.getMonth() + 1) + '-' + fixDay(date.getDate());
};
