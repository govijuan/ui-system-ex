import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Radio from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

const stories = storiesOf('Radio', module)

stories.addDecorator(withKnobs)

stories
  .add('Radio small', () => (
    <GlobalContainerToggleTheme>
      <Radio
        name="group"
        checked={boolean('Checked', false)}
        color="primary"
        size="small"
      />
    </GlobalContainerToggleTheme>
  ))
  .add('Radio medium', () => (
    <GlobalContainerToggleTheme>
      <Radio name="group" checked={boolean('Checked', false)} color="primary" />
    </GlobalContainerToggleTheme>
  ))
  .add('Radio large', () => (
    <GlobalContainerToggleTheme>
      <Radio
        name="group"
        checked={boolean('Checked', false)}
        color="primary"
        size="large"
      />
    </GlobalContainerToggleTheme>
  ))
