import ThemeInterface from '../ThemeInterface';
import colors from '../colors';

const purple: ThemeInterface = {
  accent: colors.turquoise,
  active: colors.purpleDark,
  background: `linear-gradient(135deg, ${colors.purpleLight} 0%, ${
    colors.purpleBackground
  } 100%)`,
  primary: colors.purple,
  secondary: colors.purpleLight,
  font: colors.white,
  buttons: {
    primary: {
      text: colors.grayDark,
      background: colors.turquoise,
      backgroundHover: colors.turquoiseLight,
      backgroundActive: colors.turquoiseDark,
      borderFocus: colors.turquoiseDark,
    },
    secondary: {
      text: colors.purple,
      background: colors.white,
      backgroundHover: colors.grayLighter,
      backgroundActive: colors.white,
      borderFocus: colors.grayLight,
    },
    red: {
      text: colors.white,
      background: colors.red,
      backgroundHover: colors.redLight,
      backgroundActive: colors.redDark,
      borderFocus: colors.redDark,
    },
    yellow: {
      text: colors.gray,
      background: colors.yellow,
      backgroundHover: colors.yellowLight,
      backgroundActive: colors.yellowDark,
      borderFocus: colors.yellowDark,
    },
    green: {
      text: colors.gray,
      background: colors.green,
      backgroundHover: colors.greenLight,
      backgroundActive: colors.greenDark,
      borderFocus: colors.greenDark,
    },
    default: {
      text: colors.white,
      background: colors.grayDark,
      backgroundHover: colors.grayLight,
      backgroundActive: colors.grayDark,
      borderFocus: colors.grayDark,
    },
  },
  dropdowns: {
    primary: {
      text: colors.grayDark,
      background: colors.turquoise,
    },
    secondary: {
      text: colors.purple,
      background: colors.white,
    },
  },
};

export default purple;
