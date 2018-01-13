import React from 'react'
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
  }

  &:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
`
