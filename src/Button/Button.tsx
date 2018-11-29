import React from 'react';
import styled from '../themes/styled-components';
import ThemeInterface from '../themes/ThemeInterface';

type colorType = 'primary' | 'secondary' | 'negative';
type sizeType = 'small' | 'medium' | 'large';

interface Props {
  /** The color of the button, defaults to 'primary' */
  color: colorType;

  /** Disables the button, changing the visual style and make it unable to be pressed */
  disabled?: boolean;

  /** The size of the button, defaults to 'medium' */
  size?: sizeType;

  /** Type of the button, defaults to 'button' */
  type?: 'submit' | 'button';

  /** Function to handle button click */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
}

const Button: React.SFC<Props> = ({
  children,
  disabled = false,
  type = 'button',
  onClick,
  color,
  size = 'medium',
}) => (
  <ButtonStyled
    disabled={disabled}
    type={type}
    onClick={onClick}
    color={color}
    size={size}
  >
    {children}
  </ButtonStyled>
);

const visibledTypeColors = (
  theme: ThemeInterface,
  color: colorType,
  property: string
) => {
  const { buttons } = theme;
  const ObjectKey = Object.keys(buttons).filter((v) => v === color);
  const colors = buttons[String(ObjectKey) || 'primary'];
  return colors[property];
};

const ButtonStyled = styled<Props, 'button'>('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  height: 40px;
  margin: 0;
  min-width: 120px;
  padding: 0 16px;
  position: relative;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 4px;
  color: ${(props) => visibledTypeColors(props.theme, props.color, 'text')};
  background-color: ${(props) =>
    visibledTypeColors(props.theme, props.color, 'background')};
  border-color: ${(props) =>
    visibledTypeColors(props.theme, props.color, 'background')};
  cursor: pointer;
  overflow: hidden;
  outline: none;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    opacity: 0.3;
    background-color: ${(props) =>
      visibledTypeColors(props.theme, props.color, 'borderFocus')};
    transform: translate(-50%, -50%);
  }
  &:hover {
    background-color: ${(props) =>
      visibledTypeColors(props.theme, props.color, 'backgroundHover')};
    border-color: ${(props) =>
      visibledTypeColors(props.theme, props.color, 'backgroundHover')};
  }
  &:active {
    background-color: ${(props) =>
      visibledTypeColors(props.theme, props.color, 'backgroundActive')};
    border-color: ${(props) =>
      visibledTypeColors(props.theme, props.color, 'backgroundActive')};
  }
  &:focus {
    background-color: ${(props) =>
      visibledTypeColors(props.theme, props.color, 'background')};
    border-color: ${(props) =>
      visibledTypeColors(props.theme, props.color, 'borderFocus')};
  }
  &:focus:before,
  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.4s ease-out, padding-top 0.4s ease-out;
  }
`;

export default Button;
