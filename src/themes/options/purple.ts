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
      text: colors.grayDark,
      background: colors.turquoise,
      backgroundHover: colors.turquoiseLight,
      backgroundActive: colors.turquoiseDark,
      borderFocus: colors.turquoiseDark,
    },
    default: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark,
    },
  },
};

export default purple;
