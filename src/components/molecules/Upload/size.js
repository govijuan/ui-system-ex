import { css } from 'styled-components'

const size = props => {
  const options = {
    small: css`
      padding: 8px;
      font-size: 12px;
    `,
    medium: css`
      padding: 16px;
      font-size: 14px;
    `,
    large: css`
      padding: 24px;
      font-size: 24px;
    `
  }

  return props.size ? options[props.size] : options.medium
}

export default size
