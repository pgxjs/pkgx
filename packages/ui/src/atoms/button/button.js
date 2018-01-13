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
  font-weight: 600;
  line-height: 47px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;

  padding: 0 35px;
  display: block;

  ${(p) => p.fullWidth && css`
    width: 100%;
  `}

  ${(p) => p.small && css`
    line-height: 22px;
    font-size: 14px;
    padding: 5px 20px;
  `}

  ${(p) => p.rounded && css`
    border-radius: ${(ps) => ps.small ? '22px' : '47px'};
  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

Button.propTypes = {
  fullWidth: PropTypes.bool,
  small: PropTypes.bool,
  rounded: PropTypes.bool,

  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  fullWidth: false,
  small: false,
  rounded: false,

  onClick: null,
  children: '',
  disabled: false,
}

