# Frontend

## Scripts

### `dev`

Starts `webpack-dev-server`.

## Structure

- `./src` contains source files
- `./webpack` contains configuration for development, production and test builds
- `./webpack.config.js` simple load `./webpack/${process.env.NODE_ENV}.js`
- `./dist` contains bundle
- `./static` contains assets like images or fonts

NPM package includes `dist` and `static` directories to tarball.
