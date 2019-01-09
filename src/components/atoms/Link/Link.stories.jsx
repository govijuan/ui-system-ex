import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'
import GlobalContainerToggleTheme from '../../templates/GlobalContainerToggleTheme'

storiesOf('Link', module)
  .add('Link small', () => (
    <GlobalContainerToggleTheme>
      <Fragment>
        <Link href="#" size="small">
          Link
        </Link>
      </Fragment>
    </GlobalContainerToggleTheme>
  ))
  .add('Link medium', () => (
    <GlobalContainerToggleTheme>
      <Fragment>
        <Link href="#" size="medium">
          Link
        </Link>
      </Fragment>
    </GlobalContainerToggleTheme>
  ))
  .add('Link large', () => (
    <GlobalContainerToggleTheme>
      <Fragment>
        <Link href="#" size="large">
          Link
        </Link>
      </Fragment>
    </GlobalContainerToggleTheme>
  ))
