import React from 'react'
import { Container } from 'styled-bootstrap-grid'

const GridContainer = props => (
  <Container {...props}>{props.children}</Container>
)

export default GridContainer
