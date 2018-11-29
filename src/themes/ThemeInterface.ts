interface Button {
  text: string;
  background: string;
  backgroundHover: string;
  backgroundActive: string;
  borderFocus: string;
}

interface Dropdown {
  text: string;
  background: string;
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
    red: Button;
    yellow: Button;
    green: Button;
    default: Button;
  };
  dropdowns: {
    primary: Dropdown;
    secondary: Dropdown;
  };
}
