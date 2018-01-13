import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Link } from './link'


const preventAction = (event) => {
  event.preventDefault()
  action('click google')(event)
}

storiesOf('atoms/Link', module)
  .add('Prevented link', () => (
    <Link href="//google.com" onClick={preventAction}>Google</Link>
  ))
  .add('Real link', () => (
    <Link href="//yandex.com" onClick={action('click yandex')}>Yandex</Link>
  ))
