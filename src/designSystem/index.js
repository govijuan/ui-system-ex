import color from './color'
import theme from './theme'
import font from './font'
import grid from './grid'

export default {
  color: {
    ...color,
    error: color.red,
    success: color.green
  },
  theme,
  font,
  grid
}
