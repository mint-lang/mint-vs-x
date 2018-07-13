This is the equivalent JavaScript stack of the base Mint example.

# Prerequisites
To start development we need the following things installed:

* [node.js](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/en/docs/install#debian-stable)

Time to complete: **0.5 hours**

# 1. Development Server

To get the development server up and running:

* Initialize a new `package.json` with `yarn init`
* Install webpack packages with
  `yarn add webpack webpack-cli webpack-dev-server`
* Install babel packages with
  `yarn add babel-core babel-loader babel-plugin-typecheck babel-preset-flow babel-preset-react`
* Install react with `react react-dom`
* Create [`.babelrc`](./.babelrc)
* Create [`webpack.config.js`](./webpack.config.js)
* Create initial [`index.html`](./index.html)
* Create initial [`src/main.jsx`](./src/main.jsx)

At this point we have type checking, and HTML compiling successfully.

Time to complete: **1.5 hours** (with a lot of web searches)
