import ThemeInterface from '../ThemeInterface';
import colors from '../colors';

const dark: ThemeInterface = {
  accent: colors.turquoiseLight,
  active: colors.grayDark,
  background: colors.grayMedium,
  primary: colors.gray,
  secondary: colors.grayMedium,
  font: colors.white,
  buttons: {
    primary: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark,
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
      text: colors.white,
      background: colors.purple,
    },
    secondary: {
      text: colors.purple,
      background: colors.white,
    },
  },
};

export default dark;
