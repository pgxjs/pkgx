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
  .add('Small', () => (
    <Button small onClick={action('small')}>Foo bar</Button>
  ))
  .add('Small full width', () => (
    <Button small fullWidth onClick={action('small full width')}>Foo bar</Button>
  ))
  .add('Rounded', () => (
    <Button rounded onClick={action('rounded')}>Foo bar</Button>
  ))
  .add('Rounded small', () => (
    <Button rounded small onClick={action('rounded small')}>Foo bar</Button>
  ))
  .add('Rounded small full width', () => (
    <Button rounded small fullWidth onClick={action('rounded small full width')}>Foo bar</Button>
  ))
