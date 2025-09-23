/**
 * Redirects the user to the specified URL.
 * If the URL starts with 'http', it will be opened in a new tab/window.
 * Otherwise, it will be appended to the base URL and the current page will be redirected to the new URL.
 *
 * @param {string} to - The URL to redirect to.
 */
export const redirectTo = (to, newWindow = true) => {
  const baseUrl = window.location.origin;

  if (to.startsWith('http')) {
    if (newWindow) {
      window.open(to, '_blank');
      return;
    }

    window.location.href = to;
    return;
  }

  window.location.href = `${baseUrl}${to}`;
};
