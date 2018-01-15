# PKX

## Development

### Dev servers

To start @pkx/frontend and @pkx/backend together:

```bash
npm run dev
```

It executes `dev:backend` and `dev:frontend` through `concurrently`

<br/>

To start backend or frontend separately use:

```bash
npm run dev:backend
# or
npm run dev:frontend
```

It run `dev` script in `@pkx/backend` and `@pkx/frontend`

### Routes

To show map of available routes on backend use:

```bash
npm run routes
```

It run `routes` script in `@pkx/backend`

### Storybook

To run storybook:

```bash
npm run storybook
```

It run `storybook` script in `@pkx/ui` through lerna storybook-cli on http://localhost:9001/


### Build

To run build:

```bash
npm run build
```

It run `build` script in each package trought lerna.

### Publish

> Publishing through `npm publish` disabled!

Use:

```bash
npm run publish
```

It executes `build` script in each package next run `lerna publish`.

Please, test before publishing.


### Clean

To remove `dist` directories use:

```bash
npm run clean
```

To remove `node_modules` use:

```bash
npx lerna clean
```

