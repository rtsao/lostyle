import assign from './util/assign.js';

/**
 * Directional borderColor helper
 * @function borderColor
 * @param  {number|string|object} value
 * @param  {number|string}        [value.x]      X-axis value
 * @param  {number|string}        [value.y]      Y-axis value
 * @param  {number|string}        [value.top]    Top value
 * @param  {number|string}        [value.right]  Right value
 * @param  {number|string}        [value.bottom] Bottom value
 * @param  {number|string}        [value.left]   Left value
 * @return {object}                              Style object
 */
export default function borderColor(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftColor: arg.x, borderRightColor: arg.x},
      arg.y && {borderTopColor: arg.y, borderBottomColor: arg.y},
      arg.top && {borderTopColor: arg.top},
      arg.right && {borderRightColor: arg.right},
      arg.bottom && {borderBottomColor: arg.bottom},
      arg.left && {borderLeftColor: arg.left}
    );
  }
  return {
    borderTopColor: arg,
    borderRightColor: arg,
    borderBottomColor: arg,
    borderLeftColor: arg
  };
}
