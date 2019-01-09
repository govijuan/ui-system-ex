import { css } from 'styled-components'

const size = props => {
  const options = {
    small: css`
      width: 18px;
      height: 18px;
    `,
    medium: css`
      width: 24px;
      height: 24px;
    `,
    large: css`
      width: 36px;
      height: 36px;
    `
  }

  return props.size ? options[props.size] : options.medium
}

export default size
