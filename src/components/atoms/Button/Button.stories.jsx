import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Button', module)
  .add('Button small', () => (
    <GlobalContainerToggleTheme>
      <Button size="small" color="primary">
        Button
      </Button>
    </GlobalContainerToggleTheme>
  ))
  .add('Button medium', () => (
    <GlobalContainerToggleTheme>
      <Button size="medium" color="primary">
        Button
      </Button>
    </GlobalContainerToggleTheme>
  ))
  .add('Button large', () => (
    <GlobalContainerToggleTheme>
      <Button size="large" color="primary">
        Button
      </Button>
    </GlobalContainerToggleTheme>
  ))
  .add('Button large fluid', () => (
    <GlobalContainerToggleTheme>
      <Button size="large" color="primary" fluid>
        Button
      </Button>
    </GlobalContainerToggleTheme>
  ))
