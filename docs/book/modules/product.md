# Product

Fetch any product as a JSON object.

## Usage

```javascript
import {getProduct} from '@elkfox/shopify-theme/scripts/product';

getProduct('red-rain-coat');
```

## Event listener

You can listen for when and what the API returns.

```javascript
document.addEventListener('product:get', (event) => {
  // console.log(event.detail.json);
});
```

## Example response

```javascript
{
  "id": 329678821,
  "title": "Red Rain Coat",
  "handle": "red-rain-coat",
  "description": "<p>Lorem Ipsum.</p>",
  "published_at": "2014-06-12T16:28:11-04:00",
  "created_at": "2014-06-12T16:28:13-04:00",
  "vendor": "Shopify",
  "type": "Coat",
  "tags": [
    "Spring"
  ],
  "price": 12900,
  "price_min": 12900,
  "price_max": 12900,
  "available": true,
  "price_varies": false,
  "compare_at_price": null,
  "compare_at_price_min": 0,
  "compare_at_price_max": 0,
  "compare_at_price_varies": false,
  "variants": [
    {
      "id": 794864229,
      "title": "Small",
      "options": [
        "Small"
      ],
      "option1": "Small",
      "option2": null,
      "option3": null,
      "price": 12900,
      "weight": 0,
      "compare_at_price": null,
      "inventory_management": "shopify",
      "available": true,
      "sku": null,
      "requires_shipping": true,
      "taxable": true,
      "barcode": "49738645"
    },
    {
      "id": 794864233,
      "title": "Medium",
      "options": [
        "Medium"
      ],
      "option1": "Medium",
      "option2": null,
      "option3": null,
      "price": 12900,
      "weight": 0,
      "compare_at_price": null,
      "inventory_management": "shopify",
      "available": true,
      "sku": null,
      "requires_shipping": true,
      "taxable": true,
      "barcode": "49738657"
    },
    {
      "id": 794864237,
      "title": "Large",
      "options": [
        "Large"
      ],
      "option1": "Large",
      "option2": null,
      "option3": null,
      "price": 12900,
      "weight": 0,
      "compare_at_price": null,
      "inventory_management": "shopify",
      "available": true,
      "sku": null,
      "requires_shipping": true,
      "taxable": true,
      "barcode": "49738673"
    }
  ],
  "images": [
    "//cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893"
  ],
  "featured_image": "//cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893",
  "options": [
    {
      "name": "Size",
      "position": 1
    }
  ],
  "url": "/products/red-rain-coat"
}
```

