import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const Link = styled.a`
  color: #cb3837;
  text-decoration: none;

  &:active {
    color: #b4302f;
  }

  &:hover, &:focus {
    color: #d1504f;
    cursor: pointer;
    text-decoration: underline;
  }

  /* &:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  } */
`

Link.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  target: PropTypes.string,
}

Link.defaultProps = {
  href: undefined,
  onClick: null,
  children: '',
  target: undefined,
}
