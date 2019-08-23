// Fetch is not supported by IE so we use a polyfill like node-fetch or unfetch
const fetch = require('node-fetch');

/**
 * Get cart
 * ------------------------------------------------------------------------------
 * Fetch the current cart as a JSON object
 * For example `console.log(getCart())`
 */

export function getCart() {
  return fetch('/cart.js', {
    method: 'GET',
  }).then((response) => response.json());
}

/**
 * Add to cart
 * ------------------------------------------------------------------------------
 * Adds an item to the cart
 * Requires variant `id` and `quantity`
 * Also accepts `properties` as an array of value pairs, ie `{ key : value }`
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
    if (json.status === 422) {
      cartEventEmitter.emit('error', json);
    } else {
      cartEventEmitter.emit('cart:added');
    }
    return json;
  }).catch((error) => {
    cartEventEmitter.emit('error', error);
  });
}
