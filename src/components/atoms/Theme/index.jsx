import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import designSystem from '../../../designSystem'
import GlobalStyle from '../../../designSystem/globalStyle'

const Theme = props => (
  <ThemeProvider theme={designSystem.theme.light}>
    <Fragment>
      <GlobalStyle />
      <Fragment>{props.children}</Fragment>
    </Fragment>
  </ThemeProvider>
)

export default Theme
