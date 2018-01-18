import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Header } from '../atoms'


const ApplicationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export const ApplicationTemplate = ({ children }) => (
  <ApplicationContainer>
    <Header>
      PKX
    </Header>
    {children}
  </ApplicationContainer>
)

ApplicationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
