import { css } from 'styled-components'
import designSystem from '../../../designSystem'

const headingByProps = props => {
  const options = {
    h1: css`
      font-size: ${designSystem.font.size.xxxl};
      font-family: ${designSystem.font.family.secondary};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h2: css`
      font-size: ${designSystem.font.size.xxl};
      font-family: ${designSystem.font.family.secondary};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h3: css`
      font-size: ${designSystem.font.size.xl};
      font-family: ${designSystem.font.family.secondary};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h4: css`
      font-size: ${designSystem.font.size.l};
      font-family: ${designSystem.font.family.primary};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h5: css`
      font-size: ${designSystem.font.size.xxm};
      font-family: ${designSystem.font.family.primary};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h6: css`
      font-size: ${designSystem.font.size.xm};
      font-family: ${designSystem.font.family.primary};
      font-weight: ${designSystem.font.weight.bold};
    `
  }

  return options[props.as]
}

export default headingByProps
