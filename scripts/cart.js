// Fetch is not supported by IE so we use a polyfill for now
import fetch from 'node-fetch';

/**
 * Get cart
 * ------------------------------------------------------------------------------
 * Fetch the current cart as a JSON object
 *
 * Usage:
 *   import {getCart} from '@elkfox/shopify-theme/scripts/cart';
 *
 *   getCart();
 *
 *   // Then listen for the event, project-wide
 *   document.addEventListener('cart:get', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

export function getCart(cart) {
  return fetch('/cart.js', {
    method: 'GET',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const cartEvent = new window.CustomEvent('cart:get', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(cartEvent);
    return cart;
  });
}

/**
 * Add to cart
 * ------------------------------------------------------------------------------
 * Adds an item to the cart
 * Requires variant `id` and `quantity`
 * Also accepts `properties` as an array of value pairs, ie `{ key : value }`
 *
 * Usage:
 *   import {addItem} from '@elkfox/shopify-theme/scripts/cart';
 *
 *   // Add an item
 *   addItem(item, (result) => {
 *     console.log(result)
 *   });
 *
 *   // You can also listen for the event, project-wide
 *   document.addEventListener('cart:added', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

export function addItem(data) {
  fetch('/cart/add.js', {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    method: 'POST',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const cartEvent = new window.CustomEvent('cart:added', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(cartEvent);
    return json;
  }).catch((error) => {
    const cartEvent = new window.CustomEvent('cart:error', {
      detail: {
        error,
      },
    });

    document.dispatchEvent(cartEvent);
    return error;
  });
}

/**
 * Cart update
 * ------------------------------------------------------------------------------
 * Updates line items, cart notes and cart attributes
 * Accepts `properties` as an array of value pairs, ie `{ key : value }`
 * See https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#update-cart
 *
 * Usage:
 *   import {updateCart} from '@elkfox/shopify-theme/scripts/cart';
 *
 *   updateCart(data, (result) => {
 *     console.log(result)
 *   });
 *
 *   // You can also listen for the event, project-wide
 *   document.addEventListener('cart:update', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

export function updateCart(data) {
  fetch('/cart/update.js', {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    method: 'POST',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const cartEvent = new window.CustomEvent('cart:update', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(cartEvent);
    return json;
  }).catch((error) => {
    const cartEvent = new window.CustomEvent('cart:error', {
      detail: {
        error,
      },
    });

    document.dispatchEvent(cartEvent);
    return error;
  });
}

/**
 * Item update
 * ------------------------------------------------------------------------------
 * Updates the quantity of a line item
 * Requires variant `id` or line index, and `quantity`
 * See https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#change-cart
 *
 * Usage:
 *   import {updateItem} from '@elkfox/shopify-theme/scripts/cart';
 *
 *   updateItem(data, (result) => {
 *     console.log(result)
 *   });
 *
 *   // You can also listen for the event, project-wide
 *   document.addEventListener('cart:change', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

export function updateItem(data) {
  fetch('/cart/change.js', {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    method: 'POST',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const cartEvent = new window.CustomEvent('cart:change', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(cartEvent);
    return json;
  }).catch((error) => {
    const cartEvent = new window.CustomEvent('cart:error', {
      detail: {
        error,
      },
    });

    document.dispatchEvent(cartEvent);
    return error;
  });
}

/**
 * Clear items
 * ------------------------------------------------------------------------------
 * Clears all line items, but not cart atrributes or notes
 *
 * Usage:
 *   import {clearItems} from '@elkfox/shopify-theme/scripts/cart';
 *
 *   clearItems();
 *
 *   // Then listen for the event, project-wide
 *   document.addEventListener('cart:clear', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

export function clearItems() {
  return fetch('/cart/clear.js', {
    method: 'POST',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const cartEvent = new window.CustomEvent('cart:clear', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(cartEvent);
    return json;
  });
}

/**
 * Get shipping rates
 * ------------------------------------------------------------------------------
 * Fetch the shipping rates as a JSON object
 * Requires an address
 *
 * Usage:
 *   import {getShippingRates} from '@elkfox/shopify-theme/scripts/cart';
 *
 *  const address = {
 *    'shipping_address[country]': 'Australia',
 *    'shipping_address[province]': 'Victoria',
 *    'shipping_address[zip]': '3000',
 *  }
 *
 *   getShippingRates(address);
 *
 *   // Then listen for the event, project-wide
 *   document.addEventListener('cart:get:rates', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

export function getShippingRates(address) {
  const addressString = Object.keys(address).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(address[key])}`;
  }).join('&');

  return fetch(`/cart/shipping_rates.json?${addressString}`, {
    method: 'GET',
  }).then((response) => {
    return response.json();
  }).then((json) => {
    const cartEvent = new window.CustomEvent('cart:get:rates', {
      detail: {
        json,
      },
    });

    document.dispatchEvent(cartEvent);
    return json;
  });
}
