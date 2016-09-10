import assign from './util/assign.js';

/**
 * Directional padding helper
 * @function padding
 * @param  {number|string|object} value         Value for all directions or object of values:
 * @param  {number|string}       [value.x]      Left and right value
 * @param  {number|string}       [value.y]      Top and bottom value
 * @param  {number|string}       [value.top]    Top value (takes precedence over y)
 * @param  {number|string}       [value.right]  Right value (takes precedence over x)
 * @param  {number|string}       [value.bottom] Bottom value (takes precedence over y)
 * @param  {number|string}       [value.left]   Left value (takes precedence over x)
 * @return {object}                             Style object
 */
export default function padding(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {paddingLeft: arg.x, paddingRight: arg.x},
      arg.y && {paddingTop: arg.y, paddingBottom: arg.y},
      arg.top && {paddingTop: arg.top},
      arg.right && {paddingRight: arg.right},
      arg.bottom && {paddingBottom: arg.bottom},
      arg.left && {paddingLeft: arg.left}
    );
  }
  return {
    paddingTop: arg,
    paddingRight: arg,
    paddingBottom: arg,
    paddingLeft: arg
  };
}
