import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const Header = styled.header`
  z-index: 1000;
  font-size: 16px;
  padding: 14px 20px;
  max-height: 120px;
  background-color: #2a333c;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-height: none;
    max-height: initial;
    align-items: stretch;
  }
`

Header.propTypes = {
  children: PropTypes.node,
}

Header.defaultProps = {
  children: '',
}
