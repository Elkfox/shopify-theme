/**
 * @elkfox/shopify-theme/scripts/geolocation
 * -----------------------------------------------------------------------------
 * Usage:
 *   import {getGeoLocation} from '@elkfox/shopify-theme/scripts/geolocation';
 */

export function getGeoLocation() {
  const xhr = new window.XMLHttpRequest();

  xhr.open('GET', '//geo.elkfox.net/json/');
  xhr.onload = function() {
    return JSON.parse(xhr.response);
  };
  xhr.send();
}
