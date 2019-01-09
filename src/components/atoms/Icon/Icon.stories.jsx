import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Icon', module)
  .add('Icon size small', () => (
    <GlobalContainerToggleTheme>
      <Icon name="faCheck" size="s" />
    </GlobalContainerToggleTheme>
  ))
  .add('Icon size medium', () => (
    <GlobalContainerToggleTheme>
      <Icon name="faCheck" size="m" />
    </GlobalContainerToggleTheme>
  ))
  .add('Icon size large', () => (
    <GlobalContainerToggleTheme>
      <Icon name="faCheck" size="l" />
    </GlobalContainerToggleTheme>
  ))
