import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Checkbox from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

const stories = storiesOf('Checkbox', module)

stories.addDecorator(withKnobs)

stories
  .add('Checkbox small', () => (
    <GlobalContainerToggleTheme>
      <Checkbox
        checked={boolean('Checked', false)}
        color="primary"
        size="small"
      />
    </GlobalContainerToggleTheme>
  ))
  .add('Checkbox medium', () => (
    <GlobalContainerToggleTheme>
      <Checkbox checked={boolean('Checked', false)} color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Checkbox large', () => (
    <GlobalContainerToggleTheme>
      <Checkbox
        checked={boolean('Checked', false)}
        color="primary"
        size="large"
      />
    </GlobalContainerToggleTheme>
  ))
