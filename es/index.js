import * as styledComponents from 'styled-components';
import React from 'react';

var _ref = styledComponents,
    styled = _ref.default,
    css = _ref.css,
    keyframes = _ref.keyframes,
    ThemeProvider = _ref.ThemeProvider;

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      onClick = _ref.onClick,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  return React.createElement(ButtonStyled, {
    disabled: disabled,
    type: type,
    onClick: onClick,
    color: color,
    size: size
  }, children);
};

var visibledTypeColors = function visibledTypeColors(theme, color, property) {
  var buttons = theme.buttons;
  var ObjectKey = Object.keys(buttons).filter(function (v) {
    return v === color;
  });
  var colors = buttons[String(ObjectKey) || 'primary'];
  return colors[property];
};

var ButtonStyled = styled.button.withConfig({
  displayName: "Button__ButtonStyled",
  componentId: "sc-1qbptiu-0"
})(["display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;height:40px;margin:0;min-width:120px;padding:0 16px;position:relative;text-transform:uppercase;border:2px solid transparent;border-radius:4px;color:", ";background-color:", ";border-color:", ";cursor:pointer;overflow:hidden;outline:none;&:before{content:'';position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;opacity:0.3;background-color:", ";transform:translate(-50%,-50%);}&:hover{background-color:", ";border-color:", ";}&:active{background-color:", ";border-color:", ";}&:focus{background-color:", ";border-color:", ";}&:focus:before,&:active:before{width:120%;padding-top:120%;transition:width 0.4s ease-out,padding-top 0.4s ease-out;}"], function (props) {
  return visibledTypeColors(props.theme, props.color, 'text');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'background');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'background');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'borderFocus');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'backgroundHover');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'backgroundHover');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'backgroundActive');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'backgroundActive');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'background');
}, function (props) {
  return visibledTypeColors(props.theme, props.color, 'borderFocus');
});

var Card = function Card(_ref) {
  var children = _ref.children,
      width = _ref.width,
      padding = _ref.padding,
      flexDirection = _ref.flexDirection;
  return React.createElement(Wrapper, {
    width: width,
    padding: padding,
    flexDirection: flexDirection
  }, children);
};

var Wrapper = styled.div.withConfig({
  displayName: "Card__Wrapper",
  componentId: "a894x1-0"
})(["background-color:", ";border-radius:0;flex:1;display:flex;flex-direction:", ";overflow:auto;padding:", ";width:", ";"], function (props) {
  return props.theme.primary;
}, function (props) {
  return props.flexDirection ? props.flexDirection : 'column';
}, function (props) {
  return props.padding ? props.padding : 0;
}, function (props) {
  return props.width ? props.width : 'auto';
});

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

export { Button, Card, themes };
