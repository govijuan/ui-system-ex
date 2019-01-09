import { createGlobalStyle } from 'styled-components'
import designSystem from '../designSystem'

export default createGlobalStyle`
  * {
    font-family: ${designSystem.font.family.primary};
    font-weight: ${designSystem.font.weight.regular};
    font-size: ${designSystem.font.size.base};
  }

  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
`
