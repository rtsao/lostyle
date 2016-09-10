import assign from './util/assign.js';

/**
 * Directional borderWidth helper
 * @function borderWidth
 * @param  {number|string|object} value         Value for all directions or object of values:
 * @param  {number|string}       [value.x]      Left and right value
 * @param  {number|string}       [value.y]      Top and bottom value
 * @param  {number|string}       [value.top]    Top value (takes precedence over y)
 * @param  {number|string}       [value.right]  Right value (takes precedence over x)
 * @param  {number|string}       [value.bottom] Bottom value (takes precedence over y)
 * @param  {number|string}       [value.left]   Left value (takes precedence over x)
 * @return {object}                             Style object
 */
export default function borderWidth(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftWidth: arg.x, borderRightWidth: arg.x},
      arg.y && {borderTopWidth: arg.y, borderBottomWidth: arg.y},
      arg.top && {borderTopWidth: arg.top},
      arg.right && {borderRightWidth: arg.right},
      arg.bottom && {borderBottomWidth: arg.bottom},
      arg.left && {borderLeftWidth: arg.left}
    );
  }
  return {
    borderTopWidth: arg,
    borderRightWidth: arg,
    borderBottomWidth: arg,
    borderLeftWidth: arg
  };
}
