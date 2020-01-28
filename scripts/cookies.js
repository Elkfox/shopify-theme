/**
 * @elkfox/shopify-theme/scripts/cookies
 * -----------------------------------------------------------------------------
 * Usage:
 *   import {cookieCreate} from '@elkfox/shopify-theme/scripts/cookies';
 *   const someCookie = cookieCreate('test_cookie', 'test_value', 30);
 *   someCookie();
 */

export function cookieTest(
    noCookiesSelector = 'supports-no-cookies',
    cookiesSelector = 'supports-cookies'
  ) {
  if (window.navigator.cookieEnabled) {
    document.documentElement.className = document.documentElement.className.replace(
      noCookiesSelector,
      cookiesSelector,
    );
  }
}

export function cookieCreate(name, value, days) {
  let expires;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toGMTString()}`;
  } else {
    expires = '';
  }
  document.cookie = `${name}=${value}${expires}; path=/`;
}

export function cookieRead(name) {
  const nameEQ = `${name}=`;
  const parts = document.cookie.split(';');
  for (let i = 0; i < parts.length; i++) {
    let value = parts[i];
    while (value.charAt(0) === ' ') {
      value = value.substring(1, value.length);
    }
    if (value.indexOf(nameEQ) === 0) {
      return value.substring(nameEQ.length, value.length);
    }
  }
  return null;
}
