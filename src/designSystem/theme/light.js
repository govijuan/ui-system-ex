import color from '../color'
import button from '../button'
import input from '../input'

export default {
  accent: color.turquoise,
  active: color.purpleDark,
  background: color.grayLighter,
  primary: color.purple,
  secondary: color.purpleLight,
  font: color.black,
  buttons: {
    ...button,
    primary: button.purple,
    secondary: button.gray
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
