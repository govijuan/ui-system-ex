import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Upload from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Upload', module)
  .add('Upload small', () => (
    <GlobalContainerToggleTheme>
      <Fragment>
        <Upload
          button="Escolher arquivo"
          paragraph="Selecione um arquivo."
          color="primary"
          size="small"
        />
      </Fragment>
    </GlobalContainerToggleTheme>
  ))
  .add('Upload medium', () => (
    <GlobalContainerToggleTheme>
      <Fragment>
        <Upload
          button="Escolher arquivo"
          paragraph="Selecione um arquivo."
          color="primary"
          size="medium"
        />
      </Fragment>
    </GlobalContainerToggleTheme>
  ))
  .add('Upload large', () => (
    <GlobalContainerToggleTheme>
      <Fragment>
        <Upload
          button="Escolher arquivo"
          paragraph="Selecione um arquivo."
          color="primary"
          size="large"
        />
      </Fragment>
    </GlobalContainerToggleTheme>
  ))
  .add('Upload fluid', () => (
    <GlobalContainerToggleTheme>
      <Fragment>
        <Upload
          button="Escolher arquivo"
          paragraph="Selecione um arquivo."
          color="primary"
          size="large"
          fluid
        />
      </Fragment>
    </GlobalContainerToggleTheme>
  ))
