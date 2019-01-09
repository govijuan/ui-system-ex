import { css } from 'styled-components'

import InputText from '../InputText'

const size = props => {
  const options = {
    small: css`
      height: 80px;
      width: 156px;
      padding: 0 8px;

      ${InputText} {
        font-size: 12px;
      }
    `,
    medium: css`
      height: 120px;
      width: 202px;
      padding: 0 16px;

      ${InputText} {
        font-size: 14px;
      }
    `,
    large: css`
      height: 160px;
      width: 248px;
      padding: 0 24px;

      ${InputText} {
        font-size: 24px;
      }
    `
  }

  return props.size ? options[props.size] : options.medium
}

export default size
