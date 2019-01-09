import styled from 'styled-components'

import size from './size'
import { getColorSettingsByProperty } from '../../../utils'
import fluid from '../../../utils/fluid'

const Textarea = styled.textarea`
  border: 1px solid;
  border-radius: 4px;
  border-color: ${props => getColorSettingsByProperty(props, 'background')};
  /* background-color: ${props =>
    getColorSettingsByProperty(props, 'background')}; */
  display: flex;
  align-items: center;

  ${size}
  ${fluid}
`

export default Textarea
