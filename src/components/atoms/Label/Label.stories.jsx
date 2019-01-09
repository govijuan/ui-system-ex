import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Label', module)
  .add('Label small', () => (
    <GlobalContainerToggleTheme>
      <Label size="small" color="primary">
        Label
      </Label>
    </GlobalContainerToggleTheme>
  ))
  .add('Label medium', () => (
    <GlobalContainerToggleTheme>
      <Label size="medium" color="primary">
        Label
      </Label>
    </GlobalContainerToggleTheme>
  ))
  .add('Label large', () => (
    <GlobalContainerToggleTheme>
      <Label size="large" color="primary">
        Label
      </Label>
    </GlobalContainerToggleTheme>
  ))
