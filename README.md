# eslint-config-aeriaui

Official [shareable ESLint configuration](https://eslint.org/docs/latest/extend/shareable-configs) for Aeria Framework, meant to keep code consistent and readable across projects. Read the source code to view all the rules.

## How to use it

1. Install the dependencies:

```sh
$ npm install -D eslint eslint-config-aeriaui
```


2. Create a `eslint.config.js` file in the root of your project containing the following:

```js
// eslint.config.js
import aeriaUi from 'eslint-config-aeriaui'
export default aeriaUi
```

