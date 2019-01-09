import styled, { css } from 'styled-components'

const size = props => {
  const options = {
    small: css`
      font-size: 12px;
    `,
    medium: css`
      font-size: 14px;
    `,
    large: css`
      font-size: 24px;
    `
  }

  return props.size ? options[props.size] : options.medium
}

const Label = styled.label`
  color: ${props => props.theme.font};
  display: inline-block;
  margin-bottom: 8px;

  ${size}
`

export default Label
