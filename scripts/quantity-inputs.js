/* Custom quantity spinners
 * =====
 *
 * Configurable options;
 * quantityWrapper: Quantity wrapper selector
 *
 * Usage;
 *
 *  <label for="Quantity" id="quantityWrapper">
 *    <span>Quantity</span>
 *    <button type="button" class="js" aria-hidden="true" value="-">Decrease</button>
 *    <input type="number" id="Quantity" name="quantity" value="1" min="1">
 *    <button type="button" class="js" aria-hidden="true" value="+">Increase</button>
 *  </label>
 *
 *  const quantityInputTools = new quantityInputs({
 *    quantityWrapper: '#quantityWrapper',
 *  });
 *
 *  quantityInputTools();
*/

export function quantityInputs(settings) {
  const quantityWrappers = document.querySelectorAll(settings.quantityWrapper);

  for (let i = 0; i < quantityWrappers.length; i++) {
    createBindings(quantityWrappers[i]);
  }
}

function createBindings(quantityContainer) {
  const quantityAmount = quantityContainer.querySelector('input');
  const quantityIncrease = quantityContainer.querySelector('button[value="+"]');
  const quantityDecrease = quantityContainer.querySelector('button[value="-"]');

  quantityIncrease.addEventListener('click', () => {
    increaseValue(quantityAmount);
  });

  quantityDecrease.addEventListener('click', () => {
    decreaseValue(quantityAmount);
  });
}

function increaseValue(quantityAmount) {
  const quantityMax = quantityAmount.getAttribute('max');
  let value = parseInt(quantityAmount.value, 10);
  value = isNaN(value) ? 0 : value;

  if (value < quantityMax || quantityMax === null) {
    value++;
  } else {
    console.log('No more items available')
  }

  quantityAmount.value = value;
}

function decreaseValue(quantityAmount) {
  const quantityMin = quantityAmount.getAttribute('min');
  let value = parseInt(quantityAmount.value, 10);
  value = isNaN(value) ? 0 : value;

  if (value > quantityMin) {
    value--;
  }

  quantityAmount.value = value;
}
