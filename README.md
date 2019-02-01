<div align="center">
  <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/eye-outline-128.png" alt="seer" width="128px">
</div>

## Overview

*A simplistic and fast JavaScript library for building user interfaces.*

**seer** is yet another library for creating interfaces. It aims to be simplistic to use and fast enough for modern needs.

## Features

- No VDOM, it makes use of the real DOM by using WebComponents under the hood
- No compilation step required, templating features already present in the JavaScript language are used. *JSX might be supported in the future to allow more features.*
- Encapsulated styling built right-in (using Shadow DOM)
- React-like composable hooks
- Performant

## Example

```js
import { component, html, css } from "@klintmane/seer";

// The component declared as `btn` will define a Custom Web Component `seer-btn`
const Button = component("btn", props => {
  const { title, children } = props;

  css`
    button {
      color: ${color};
      background: blue;
    }
    
    button:hover {
      background: navy;
    }
  `;

  return html`
    <button>${title || children}</button>
  `;
});

// Using the seer-btn declared above
const App = component("app", props => html`
  <seer-btn>Click Me!</seer-btn>
`);
```
