import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Input', module)
  .add('Input small', () => (
    <GlobalContainerToggleTheme>
      <Input size="small" color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Input medium', () => (
    <GlobalContainerToggleTheme>
      <Input size="medium" color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Input large', () => (
    <GlobalContainerToggleTheme>
      <Input size="large" color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Input large fluid', () => (
    <GlobalContainerToggleTheme>
      <Input size="large" color="primary" fluid />
    </GlobalContainerToggleTheme>
  ))
