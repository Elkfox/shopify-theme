/**
 * Collection Sorting
 * ------------------------------------------------------------------------------
 * See https://gist.github.com/carolineschnapp/11352987
 */

Shopify.queryParams = {};
if (window.location.search.length) {
  for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
    aKeyValue = aCouples[i].split('=');
    if (aKeyValue.length > 1) {
      Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
    }
  }
}

if (Shopify.queryParams.sort_by) {
  document.querySelector('#sort-by').value = Shopify.queryParams.sort_by;
} else {
  document.querySelector('#sort-by').value = 'manual';
}

document.querySelector('#sort-by').addEventListener('change', function() {
  const urlSearchParams = new window.URLSearchParams(
    window.location.search.indexOf('sort_by') > -1
    ? window.location.search.replace(/sort_by/gi, '')
    : window.location.search
  );

  urlSearchParams.set(this.name, this.value);

  window.location = `?sort_by${urlSearchParams}`;
});
