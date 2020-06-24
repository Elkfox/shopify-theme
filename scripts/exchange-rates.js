/**
 * Global exchange rates
 * ------------------------------------------------------------------------------
 * Makes all exchange rates (relative to USD) available in window.Shop variable
 *
 * Usage:
 *   import {loadExchangeRates} from '@elkfox/shopify-theme/scripts/exchange-rates';
 *
 *   loadExchangeRates();
 *
 *   // Then listen for the event, project-wide
 *   document.addEventListener('shop:currencies:rates:loaded', (event) => {
 *     console.log(event.detail.json);
 *   });
 */

export function loadExchangeRates() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//cdn.shopify.com/s/javascripts/currencies.js?callback=?";';
  document.head.appendChild(script);

  script.addEventListener('load', () => {
    const rates = window.Currency.rates;

    window.Shop = {
      exchangeRates: rates,
    };

    const exchangeRatesLoadedEvent = new window.CustomEvent('shop:currencies:rates:loaded', {
      detail: {
        json: rates,
      },
    });

    document.dispatchEvent(exchangeRatesLoadedEvent);
  });
}
