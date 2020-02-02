# Quantity inputs

Adds custom dynamic quantity adjustment 'spinners' to number input fields.

{% code title="product.liquid" %}
```markup
 <label for="Quantity" id="quantityWrapper">
   <span>Quantity</span>
   <button type="button" class="js" aria-hidden="true" value="-">Decrease</button>
   <input type="number" id="Quantity" name="quantity" value="1" min="1">
   <button type="button" class="js" aria-hidden="true" value="+">Increase</button>
 </label>
```
{% endcode %}

A class or ID {string} is required.

```javascript
const quantityWrapper = '#quantityWrapper';

const quantityInputTools = new quantityInputs({
  quantityWrapper: quantityWrapper,
});

quantityInputTools();
```





