import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


export const Input = styled.input`
  -webkit-appearance: none;
  outline: none;

  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);

  font-family: 'Source Sans Pro', 'Lucida Grande', sans-serif;
  font-size: 16px;
  vertical-align: middle;

  display: block;
  padding: 5px;
  height: 38px;

  ${(p) => p.fullWidth && css`
    width: 100%;
  `}

  &[disabled] {
    color: rgba(0, 0, 0, 0.2);
  }
`

Input.propTypes = {
  fullWidth: PropTypes.bool,

  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  fullWidth: false,

  value: undefined,
  onChange: null,
  disabled: false,
  name: undefined,
  type: 'text',
}
