# Ajax Cart

The Ajax Cart module is a wrapper for the [Shopify Ajax API](https://shopify.dev/docs/ajax-api/reference).

**getCart**, **addItem**, **updateCart**, **updateItem**, **clearItems** and **getShippingRates** methods are available using this module. An additional getProduct method is currently available seperately via the [Product](product.md) module.

All methods include an event listener.

## getCart

Fetches the current cart as a JSON object.

```javascript
import {getCart} from '@elkfox/shopify-theme/scripts/cart';

getCart();
```

**Event listener**

You can also listen for the getCart event throughout your project.

```javascript
 document.addEventListener('cart:get', (event) => {
   // console.log(event.detail.json);
 });
```

## addItem

Adds an item to the cart.

Requires variant `id` and `quantity`

Also accepts `properties` as an array of value pairs, ie `{ key : value }`

```javascript
import {addItem} from '@elkfox/shopify-theme/scripts/cart';

addItem(item, (result) => {
  // console.log(result)
});
```

**Event listener**

```javascript
 document.addEventListener('cart:added', (event) => {
   // console.log(event.detail.json);
 });
```

## updateCart

Updates line items, cart notes and cart attributes.

Accepts `properties` as an array of value pairs, ie `{ key : value }`

```javascript
import {updateCart} from '@elkfox/shopify-theme/scripts/cart';

updateCart(data, (result) => {
  // console.log(result)
});
```

**Event listener**

```javascript
document.addEventListener('cart:update', (event) => {
  // console.log(event.detail.json);
});
```

## updateItem

Updates the quantity of a line item.

Requires variant `id` or line index, and `quantity`

```javascript
 import {updateItem} from '@elkfox/shopify-theme/scripts/cart';

 updateItem(data, (result) => {
   // console.log(result)
 });
```

**Event listener**

```javascript
 document.addEventListener('cart:change', (event) => {
   // console.log(event.detail.json);
 });
```

## clearItems

Clears all line items, but **not** cart atrributes or notes.

```javascript
clearItems();
```

**Event listener**

```javascript
document.addEventListener('cart:clear', (event) => {
  // console.log(event.detail.json);
});
```

## getShippingRates

Fetch the shipping rates as a JSON object.

Requires an address.

```javascript
import {getShippingRates} from '@elkfox/shopify-theme/scripts/cart';

const address = {
  'shipping_address[country]': 'Australia',
  'shipping_address[province]': 'Victoria',
  'shipping_address[zip]': '3000',
}

getShippingRates(address);
```

**Event listener**

```javascript
document.addEventListener('cart:get:rates', (event) => {
  // console.log(event.detail.json);
});
```

