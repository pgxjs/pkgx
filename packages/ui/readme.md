# UI

It package holds all UI components for PKX Frontend.

### Structure

All components must be placed in one of that categories:

- atoms
- molecules
- organisms
- templates

> Rule to right select category for component see in [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) chapter 2 or send question in [Russian community in telegram](https://t.me/atomicdesign).

1. Each category must be present directory with the same name.
2. Each category must have `index.js` file in it root with components reexports.
3. Each component must be placed in directory name with name like component name but transformed to
param case and same file.
4. Each component must have `.story.js` file.

Example:

Component `ExampleButton`

```
atoms/
  example-button/
    example-button.js
    example-button.story.js
    example-button.test.js
```

`atoms/example-button/example-button.js` must contains source of `ExampleButton` component.

`atoms/example-button/example-button.story.js` must contains storybook examples.

`atoms/example-button/example-button.test.js` must contains test cases.

`atoms/index.js` must have export:

```js
export { Button } from './example-button/example-button'
```

`index.js` must have export:

```js
export * from './atoms'
```

If component should have variants it can be reexported with main component:

```js
export { Button, ButtonLink, ButtonSubmit } from './button/button'
```
