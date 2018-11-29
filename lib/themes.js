'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var colors = {
  gray: '#2A2531',
  grayDark: '#221D28',
  grayLight: '#CAD1DA',
  grayLighter: '#F1F2F4',
  grayLightest: '#F8F9FB',
  grayMedium: '#423D4E',
  green: '#8EFA94',
  purple: '#601DC6',
  purpleBackground: '#A01CEA',
  purpleDark: '#471496',
  purpleLight: '#6633ff',
  purpleLighter: '#C36CFF',
  red: '#FF264A',
  redDark: '#C80929',
  redLight: '#FF5F7A',
  turquoise: '#00FFFC',
  turquoiseDark: '#01BFBD',
  turquoiseLight: '#44FFFD',
  white: '#FFFFFF',
  yellow: '#FFED48'
};

var dark = {
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
      borderFocus: colors.purpleDark
    },
    secondary: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    },
    negative: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    },
    third: {
      text: colors.white,
      background: colors.turquoise,
      backgroundHover: colors.turquoiseLight,
      backgroundActive: colors.turquoiseDark,
      borderFocus: colors.turquoiseDark
    },
    default: {
      text: colors.white,
      background: colors.grayDark,
      backgroundHover: colors.grayLight,
      backgroundActive: colors.grayDark,
      borderFocus: colors.grayDark
    }
  }
};

var purple = {
  accent: colors.turquoise,
  active: colors.purpleDark,
  background: "linear-gradient(135deg, " + colors.purpleLight + " 0%, " + colors.purpleBackground + " 100%)",
  primary: colors.purple,
  secondary: colors.purpleLight,
  font: colors.white,
  buttons: {
    primary: {
      text: colors.grayDark,
      background: colors.turquoise,
      backgroundHover: colors.turquoiseLight,
      backgroundActive: colors.turquoiseDark,
      borderFocus: colors.turquoiseDark
    },
    secondary: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    },
    negative: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    },
    third: {
      text: colors.grayDark,
      background: colors.turquoise,
      backgroundHover: colors.turquoiseLight,
      backgroundActive: colors.turquoiseDark,
      borderFocus: colors.turquoiseDark
    },
    default: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    }
  }
};

var light = {
  accent: colors.turquoise,
  active: colors.purpleDark,
  background: "linear-gradient(135deg, " + colors.purpleLight + " 0%, " + colors.purpleBackground + " 100%)",
  primary: colors.purple,
  secondary: colors.purpleLight,
  font: colors.white,
  buttons: {
    primary: {
      text: colors.grayDark,
      background: colors.turquoise,
      backgroundHover: colors.turquoiseLight,
      backgroundActive: colors.turquoiseDark,
      borderFocus: colors.turquoiseDark
    },
    secondary: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    },
    negative: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    },
    third: {
      text: colors.white,
      background: colors.purple,
      backgroundHover: colors.purpleLight,
      backgroundActive: colors.purpleDark,
      borderFocus: colors.purpleDark
    },
    default: {
      text: colors.white,
      background: colors.grayDark,
      backgroundHover: colors.grayLight,
      backgroundActive: colors.grayDark,
      borderFocus: colors.grayDark
    }
  }
};

var themes = {
  dark: dark,
  purple: purple,
  light: light
};

exports.default = themes;
