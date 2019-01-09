import React from 'react'
import styled from 'styled-components'
import { getColorSettingsByProperty } from '../../../utils'
import designSystem from '../../../designSystem'
import size from './size'

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25%;
  margin-left: -25%;
  display: block;
`

const StyledRadio = styled.div`
  display: inline-block;
  background-color: ${props =>
    props.checked
      ? getColorSettingsByProperty(props, 'background')
      : designSystem.color.grayLight};
  border-radius: 50%;
  transition: all 150ms;
  position: relative;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  ${size}
`

const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Radio = ({ className, checked, ...props }) => (
  <RadioContainer className={className}>
    <HiddenRadio checked={checked} {...props} />
    <StyledRadio checked={checked} {...props}>
      <Icon />
    </StyledRadio>
  </RadioContainer>
)

export default Radio
