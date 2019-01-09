import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Heading from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Heading', module).add('as h1...h6', () => (
  <GlobalContainerToggleTheme>
    <Fragment>
      <Heading as="h1">H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>
      <Heading as="h4">H4</Heading>
      <Heading as="h5">H5</Heading>
      <Heading as="h6">H6</Heading>
    </Fragment>
  </GlobalContainerToggleTheme>
))
