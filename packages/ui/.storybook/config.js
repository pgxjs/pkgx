import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components'


import { globalStyles } from '../src/atoms'


function loadStories() {
  const req = require.context('../src/', true, /\w+\.story\.js$/)

  req.keys().forEach(req)
}

injectGlobal(globalStyles)

configure(loadStories, module)
