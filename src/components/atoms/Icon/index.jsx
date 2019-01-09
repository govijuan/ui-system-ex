import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as svgIcons from '@fortawesome/free-solid-svg-icons'

import designSystem from '../../../designSystem'

const IconMarkup = props => (
  <FontAwesomeIcon className={props.className} icon={svgIcons[props.name]} />
)

const Icon = styled(IconMarkup)`
  color: ${props =>
    props.color ? designSystem.color[props.color] : props.theme.font};
  font-size: ${props => designSystem.font.size[props.size]};
`

export default Icon
