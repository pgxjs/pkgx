import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from './input'

/* eslint-disable react/prop-types */

class InputState extends Component {
  state = { value: '' }

  onChange = (event) => {
    action(this.props.name)(event)
    this.setState({ value: event.target.value })
  }

  render() {
    const { children } = this.props

    return children({ value: this.state.value, onChange: this.onChange })
  }
}

storiesOf('atoms/Input', module)
  .add('Simple input', () => (
    <InputState name="simple">
      {({ onChange, value }) => <Input onChange={onChange} value={value} />}
    </InputState>
  ))
  .add('Full width', () => (
    <InputState name="full width">
      {({ onChange, value }) => <Input fullWidth onChange={onChange} value={value} />}
    </InputState>
  ))
  .add('Disabled', () => (
    <Input disabled value="Foo bar" />
  ))
