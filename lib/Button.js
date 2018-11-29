'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-9b1af30f.js');
var React = _interopDefault(require('react'));
require('styled-components');

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

var ButtonStyled = __chunk_1.styled.button.withConfig({
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

exports.default = Button;
