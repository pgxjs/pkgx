import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'


export const Button = styled.button`
  text-decoration: none !important;
  -webkit-appearance: none;
  clear: both;
  margin: 0;

  color: #ffffff;
  background-color: #cb3837;
  border: 0;
  border-radius: 4px;

  font-family: 'Source Sans Pro', 'Lucida Grande', sans-serif;
  font-size: 18px;
  line-height: 47px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;

  height: 47px;
  padding: 0 35px;
  display: block;

  ${(p) => p.fullWidth && css`
    width: 100%;
  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  onClick: null,
  children: '',
  disabled: false,
}

