/**
 * Apply a specific class to the html element for browser support of cookies
 *
 * Usage: import '@elkfox/shopify-theme/scripts/cookies-enabled';
 */

if (window.navigator.cookieEnabled) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}
