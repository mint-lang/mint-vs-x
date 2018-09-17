# JavaScript

This is the JavaScript implementation of a sample application used in "Mint vs X" blog posts.

# Running the application:

1. Install [node.js](https://nodejs.org/en/)
2. Install [yarn](https://yarnpkg.com/en/docs/install#debian-stable)
3. Install dependencies with `yarn`
4. Install type annotations for dependencies with `yarn flow-typed install`
5. Start the development server with `yarn webpack-dev-server`
6. The application is running on http://localhost:8080

# Building production files

1. Run the `yarn webpack --config webpack.prod.config.js` command
2. The production files are now in `dist` directory
