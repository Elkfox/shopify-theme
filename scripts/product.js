/**
 * Get product
 * ------------------------------------------------------------------------------
 * Fetch any product as a JSON object
 *
 * Usage:
 *   import {getProduct} from '@elkfox/shopify-theme/scripts/product';
 *
 *   getProduct(productHandle);
 *
 *   // Then listen for the event, project-wide
 *   document.addEventListener('product:get', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

// Fetch is not supported by IE so we use a polyfill for now
import fetch from 'node-fetch';

export function getProduct(productHandle) {
  return fetch(`/products/${productHandle}.js`, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const productEvent = new window.CustomEvent('product:get', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(productEvent);
    return product;
  });
}
