import React from 'react'
import { storiesOf } from '@storybook/react'
import Textarea from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Textarea', module)
  .add('Textarea small', () => (
    <GlobalContainerToggleTheme>
      <Textarea size="small" color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Textarea medium', () => (
    <GlobalContainerToggleTheme>
      <Textarea size="medium" color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Textarea large', () => (
    <GlobalContainerToggleTheme>
      <Textarea size="large" color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Textarea large fluid', () => (
    <GlobalContainerToggleTheme>
      <Textarea size="large" color="primary" fluid />
    </GlobalContainerToggleTheme>
  ))
