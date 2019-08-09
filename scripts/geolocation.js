/**
 * @elkfox/shopify-theme/scripts/geolocation
 * -----------------------------------------------------------------------------
 * Usage:
 *   import {getGeoLocation} from '@elkfox/shopify-theme/scripts/geolocation';
 *
 *   getGeo(function(location){
 *     console.log(location);
 *   });
 */

export function getGeoLocation(callback) {
  const xhr = new XMLHttpRequest;

  xhr.open('GET', '//geo.elkfox.net/json/');
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var location = JSON.parse(xhr.response);

      if(callback) callback(location);
    };
  }
}
