# PKX

## Development

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

> Publish through `npm publish` disabled!

Use:

```bash
npm run publish
```

It executes `build` script in each package next run `lerna publish`.

Please, test before publishing.
