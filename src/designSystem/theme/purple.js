import color from '../color'
import button from '../button'
import input from '../input'

export default {
  accent: color.turquoise,
  active: color.purpleDark,
  background: color.purpleLight,
  primary: color.purple,
  secondary: color.purpleLight,
  font: color.white,
  buttons: {
    ...button,
    primary: button.turquoise,
    secondary: button.white
  },
  input: {
    ...input,
    default: input.default,
    error: input.red,
    success: input.green
  },
  dropdowns: {
    primary: {
      text: color.grayDark,
      background: color.turquoise
    },
    secondary: {
      text: color.purple,
      background: color.white
    }
  }
}
