import styled from 'styled-components'
import { getColorSettingsByProperty } from '../../../utils'
import size from '../Input/size'
import fluid from '../../../utils/fluid'

const InputContainer = styled.div`
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

export default InputContainer
