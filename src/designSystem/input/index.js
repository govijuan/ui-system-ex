import Color from 'color'
import color from '../color'

const fadeColor = c =>
  Color(c)
    .fade(0.88)
    .string()

export default {
  default: {
    border: color.grayDark,
    background: fadeColor(color.grayDark)
  },
  white: {
    border: color.white,
    background: fadeColor(color.white)
  },
  gray: {
    border: color.grayLightest,
    background: fadeColor(color.grayLightest)
  },
  red: {
    border: color.red,
    background: fadeColor(color.red)
  },
  yellow: {
    border: color.yellow,
    background: fadeColor(color.yellow)
  },
  green: {
    border: color.green,
    background: fadeColor(color.green)
  },
  purple: {
    border: color.purple,
    background: fadeColor(color.purple)
  },
  turquoise: {
    border: color.turquoise,
    background: fadeColor(color.turquoise)
  }
}
