import assign from './util/assign.js';

/**
 * Directional borderRadius helper
 * @function borderRadius
 * @param  {number|string|object} value
 * @param  {number|string}        [value.x]      X-axis value
 * @param  {number|string}        [value.y]      Y-axis value
 * @param  {number|string}        [value.top]    Top value
 * @param  {number|string}        [value.right]  Right value
 * @param  {number|string}        [value.bottom] Bottom value
 * @param  {number|string}        [value.left]   Left value
 * @return {object}                              Style object
 */
export default function borderRadius(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftRadius: arg.x, borderRightRadius: arg.x},
      arg.y && {borderTopRadius: arg.y, borderBottomRadius: arg.y},
      arg.top && {borderTopRadius: arg.top},
      arg.right && {borderRightRadius: arg.right},
      arg.bottom && {borderBottomRadius: arg.bottom},
      arg.left && {borderLeftRadius: arg.left}
    );
  }
  return {
    borderTopRadius: arg,
    borderRightRadius: arg,
    borderBottomRadius: arg,
    borderLeftRadius: arg
  };
}
