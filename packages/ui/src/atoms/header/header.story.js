import React from 'react'
import { storiesOf } from '@storybook/react'

import { Header } from './header'


storiesOf('atoms/Header', module)
  .add('Base', () => (
    <Header>Example</Header>
  ))
