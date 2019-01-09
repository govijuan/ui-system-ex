import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GridThemeProvider, Container, Row, Col } from 'styled-bootstrap-grid'

import GlobalStyle from '../../../designSystem/globalStyle'
import designSystem from '../../../designSystem'
import ContainerContent from './ContainerContent'

class GlobalContainerToggleTheme extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: designSystem.theme.light
    }

    this.handleTheme = this.handleTheme.bind(this)
  }

  handleTheme(e) {
    this.setState({
      theme: designSystem.theme[e.target.value]
    })
  }

  render() {
    return (
      <ContainerContent>
        <GlobalStyle />

        <form>
          <label>Tema selecionado:</label>
          <select onChange={this.handleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="purple">Purple</option>
          </select>
        </form>

        <ThemeProvider theme={this.state.theme}>
          <section style={{ background: this.state.theme.background }}>
            <GridThemeProvider gridTheme={designSystem.grid}>
              <Container>{this.props.children}</Container>
            </GridThemeProvider>
          </section>
        </ThemeProvider>
      </ContainerContent>
    )
  }
}

export default GlobalContainerToggleTheme
