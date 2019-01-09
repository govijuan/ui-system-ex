import React from 'react'
import { GridThemeProvider } from 'styled-bootstrap-grid'
import designSystem from '../../../designSystem'

const GridProvider = props => (
  <GridThemeProvider gridTheme={designSystem.grid}>
    {props.children}
  </GridThemeProvider>
)

export default GridProvider
