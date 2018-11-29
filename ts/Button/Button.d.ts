import React from 'react';
declare type colorType = 'primary' | 'secondary' | 'negative';
declare type sizeType = 'small' | 'medium' | 'large';
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
declare const Button: React.SFC<Props>;
export default Button;
