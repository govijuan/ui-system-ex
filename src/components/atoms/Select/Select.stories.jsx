import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Select', module)
  .add('Select small', () => (
    <GlobalContainerToggleTheme>
      <Select size="small" color="primary">
        <option>Selecione</option>
        <option>Item</option>
      </Select>
    </GlobalContainerToggleTheme>
  ))
  .add('Select medium', () => (
    <GlobalContainerToggleTheme>
      <Select size="medium" color="primary">
        <option>Selecione</option>
        <option>Item</option>
      </Select>
    </GlobalContainerToggleTheme>
  ))
  .add('Select large', () => (
    <GlobalContainerToggleTheme>
      <Select size="large" color="primary">
        <option>Selecione</option>
        <option>Item</option>
      </Select>
    </GlobalContainerToggleTheme>
  ))
  .add('Select large fluid', () => (
    <GlobalContainerToggleTheme>
      <Select size="large" color="primary" fluid>
        <option>Selecione</option>
        <option>Item</option>
      </Select>
    </GlobalContainerToggleTheme>
  ))
