import assign from './util/assign.js';

/**
 * Directional borderStyle helper
 * @function borderStyle
 * @param  {number|string|object} value
 * @param  {number|string}        [value.x]      X-axis value
 * @param  {number|string}        [value.y]      Y-axis value
 * @param  {number|string}        [value.top]    Top value
 * @param  {number|string}        [value.right]  Right value
 * @param  {number|string}        [value.bottom] Bottom value
 * @param  {number|string}        [value.left]   Left value
 * @return {object}                              Style object
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
