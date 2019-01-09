const getColorSettingsByProperty = (props, property) => {
  const { theme, color } = props
  const { buttons } = theme
  const ObjectKey = Object.keys(buttons).filter(v => v === color)
  const colors = buttons[String(ObjectKey)]

  return colors[property]
}

export default getColorSettingsByProperty
