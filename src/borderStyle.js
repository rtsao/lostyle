import assign from './util/assign.js';

/**
 * Directional borderStyle helper
 * @function borderStyle
 * @param  {number|string|object} value         Value for all directions or object of values:
 * @param  {number|string}       [value.x]      Left and right value
 * @param  {number|string}       [value.y]      Top and bottom value
 * @param  {number|string}       [value.top]    Top value (takes precedence over y)
 * @param  {number|string}       [value.right]  Right value (takes precedence over x)
 * @param  {number|string}       [value.bottom] Bottom value (takes precedence over y)
 * @param  {number|string}       [value.left]   Left value (takes precedence over x)
 * @return {object}                             Style object
 */
export default function borderStyle(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftStyle: arg.x, borderRightStyle: arg.x},
      arg.y && {borderTopStyle: arg.y, borderBottomStyle: arg.y},
      arg.top && {borderTopStyle: arg.top},
      arg.right && {borderRightStyle: arg.right},
      arg.bottom && {borderBottomStyle: arg.bottom},
      arg.left && {borderLeftStyle: arg.left}
    );
  }
  return {
    borderTopStyle: arg,
    borderRightStyle: arg,
    borderBottomStyle: arg,
    borderLeftStyle: arg
  };
}
