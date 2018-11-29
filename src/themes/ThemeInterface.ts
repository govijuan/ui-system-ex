export interface Button {
  text: string;
  background: string;
  backgroundHover: string;
  backgroundActive: string;
  borderFocus: string;
  [key: string]: string;
}

export default interface ThemeInterface {
  accent: string;
  active: string;
  background: string;
  primary: string;
  secondary: string;
  font?: string;
  buttons: {
    primary: Button;
    secondary: Button;
    negative: Button;
    third: Button;
    default: Button;
    [key: string]: Button;
  };
}
