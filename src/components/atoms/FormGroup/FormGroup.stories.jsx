import React from 'react'
import { storiesOf } from '@storybook/react'
import FormGroup from '.'
import Label from '../Label'
import Input from '../Input'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('FormGroup', module).add('Group', () => (
  <GlobalContainerToggleTheme>
    <FormGroup>
      <Label>Label</Label>
      <Input color="primary" />
    </FormGroup>
  </GlobalContainerToggleTheme>
))
