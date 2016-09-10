import assign from './util/assign.js';

/**
 * Directional margin helper
 * @function margin
 * @param  {number|string|object} value
 * @param  {number|string}        [value.x]      X-axis value
 * @param  {number|string}        [value.y]      Y-axis value
 * @param  {number|string}        [value.top]    Top value
 * @param  {number|string}        [value.right]  Right value
 * @param  {number|string}        [value.bottom] Bottom value
 * @param  {number|string}        [value.left]   Left value
 * @return {object}                              Style object
 */
export default function margin(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {marginLeft: arg.x, marginRight: arg.x},
      arg.y && {marginTop: arg.y, marginBottom: arg.y},
      arg.top && {marginTop: arg.top},
      arg.right && {marginRight: arg.right},
      arg.bottom && {marginBottom: arg.bottom},
      arg.left && {marginLeft: arg.left}
    );
  }
  return {
    marginTop: arg,
    marginRight: arg,
    marginBottom: arg,
    marginLeft: arg
  };
}
