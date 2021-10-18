# eslint-config

A repository for JavaScript linting rules that have been derived from best practices.

## The rules `index.js` file

The rules for our JS linting are defined in `index.js`.

## Installation

```
npm i --save-dev @godaddy-wordpress/eslint-config
```

## Usage

Create a `.eslintrc.js` file in the root of your project and extend the config file:

``` js
module.exports = {
	extends: ['@godaddy-wordpress/eslint-config'],
}
```
