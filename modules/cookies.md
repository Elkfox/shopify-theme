# Cookies

Create, update, delete and read cookies.

## cookieCreate

Creates a cookie. Requires _name_ {string}, _value_ {string}, and _days_ {number}. Also used for updating and deleting cookies.

```javascript
import {cookieCreate} from '@elkfox/shopify-theme/scripts/cookies';

const someCookie = cookieCreate('some_cookie', 'test_value', 30);

someCookie();
```

### Update cookies

Cookies are updated the same way they are created.

```javascript
const updatedCookie = cookieCreate('some_cookie', 'some_new_value', 5);

updatedCookie();
```

### Deleting cookies

Assign the days variable as a negative number.

## cookieRead

Retreive values from a cookie.

```javascript
import {cookieRead} from '@elkfox/shopify-theme/scripts/cookies';

cookieRead('some_cookie');
```

## cookieTest

Test for cookie support, replacing a class from your document HTML object, when found, with a new class.

The first variable is the default _class_ {string}, that should be added to your HTML \(theme.liquid\). Defaults to \`no-cookies\`

{% code title="theme.liquid" %}
```javascript
<html class="no-cookies">
```
{% endcode %}

The second variable is the _class_ {string} that will replace the initial value. Defaults to \`cookies\`

```javascript
import {cookieTest} from '@elkfox/shopify-theme/scripts/cookies';

cookieTest('no-cookies', 'cookies');
```

When cookies are supported by the user's browser, the class applied to the HTML object will changed:

```javascript
<html class="cookies">
```

