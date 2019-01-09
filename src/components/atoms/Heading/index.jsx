import PropTypes from 'prop-types'
import styled from 'styled-components'

import headingByProps from './headingByProps'
import colorByProps from './colorByProps'

const Heading = styled.h1`
  ${headingByProps}
  ${colorByProps}
`

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a']),
  color: PropTypes.string
}

export default Heading
