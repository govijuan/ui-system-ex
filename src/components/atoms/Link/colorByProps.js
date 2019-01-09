import { css } from 'styled-components'
import designSystem from '../../../designSystem'

const colorByProps = () =>
  css`
    color: ${props =>
      props.color ? designSystem.color[props.color] : props.theme.font};
  `

export default colorByProps
