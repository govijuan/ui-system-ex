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
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark,
    },
    negative: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark,
    },
    third: {
      text: colors.white,
      background: colors.turquoise,
      backgroundHover: colors.turquoiseLight,
      backgroundActive: colors.turquoiseDark,
      borderFocus: colors.turquoiseDark,
    },
    default: {
      text: colors.white,
      background: colors.grayDark,
      backgroundHover: colors.grayLight,
      backgroundActive: colors.grayDark,
      borderFocus: colors.grayDark,
    },
  },
};

export default dark;
