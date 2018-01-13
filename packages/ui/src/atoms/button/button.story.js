import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from './button'


storiesOf('atoms/Button', module)
  .add('Common button', () => (
    <Button onClick={action('common')}>Foo bar</Button>
  ))
  .add('Full width button', () => (
    <Button fullWidth onClick={action('full width')}>Foo bar</Button>
  ))
