/**
 * Get product recommendations
 * ------------------------------------------------------------------------------
 * Fetch recommended products as a JSON object
 *
 * Usage:
 *   import {getProductRecommendations} from '@elkfox/shopify-theme/scripts/product-recommendations';
 *
 *   getProductRecommendations(productID, 4);
 *
 *   // Then listen for the event, project-wide
 *   document.addEventListener('product:get:recommendations', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

// Fetch is not supported by IE so we use a polyfill for now
import fetch from 'node-fetch';

export function getProductRecommendations(productID, responseLimit = 4) {
  return fetch(`/recommendations/products.json?product_id=${productID}&limit=${responseLimit}`, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const productRecommendationsEvent = new window.CustomEvent('product:get:recommendations', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(productRecommendationsEvent);
    return json.products;
  });
}
