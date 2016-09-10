import assign from './util/assign.js';

/**
 * Directional borderWidth helper
 * @function borderWidth
 * @param  {number|string|object} value
 * @param  {number|string}        [value.x]      X-axis value
 * @param  {number|string}        [value.y]      Y-axis value
 * @param  {number|string}        [value.top]    Top value
 * @param  {number|string}        [value.right]  Right value
 * @param  {number|string}        [value.bottom] Bottom value
 * @param  {number|string}        [value.left]   Left value
 * @return {object}                              Style object
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
