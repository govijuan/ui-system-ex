import { css } from 'styled-components'
import designSystem from '../../../designSystem'

const size = props => {
  const options = {
    small: css`
      font-size: ${designSystem.font.size.xxs};
    `,
    medium: css`
      font-size: ${designSystem.font.size.s};
    `,
    large: css`
      font-size: ${designSystem.font.size.xxm};
    `
  }

  return props.size ? options[props.size] : options.medium
}

export default size
