'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-9b1af30f.js');
var React = _interopDefault(require('react'));
require('styled-components');

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

var Wrapper = __chunk_1.styled.div.withConfig({
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

exports.default = Card;
