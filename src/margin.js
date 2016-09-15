import assign from './util/assign.js';

/**
 * Directional margin helper
 * @function margin
 * @param  {number|string|object} value         Value for all directions or object of values:
 * @param  {number|string}       [value.x]      Left and right value
 * @param  {number|string}       [value.y]      Top and bottom value
 * @param  {number|string}       [value.top]    Top value (takes precedence over y)
 * @param  {number|string}       [value.right]  Right value (takes precedence over x)
 * @param  {number|string}       [value.bottom] Bottom value (takes precedence over y)
 * @param  {number|string}       [value.left]   Left value (takes precedence over x)
 * @return {object}                             Style object
 * @example
 * // All directions
 * margin('foo');
 * // → {
 * //     marginTop: 'foo',
 * //     marginRight: 'foo',
 * //     marginBottom: 'foo',
 * //     marginLeft: 'foo'
 * //   }
 * @example
 * // A single axis
 * margin({x: 'bar'});
 * // → {
 * //     marginLeft: 'bar',
 * //     marginRight: 'bar'
 * //   }
 * @example
 * // Any combination
 * margin({y: 'foo', top: 'bar', right: 'baz'});
 * // → {
 * //     marginTop: 'bar',
 * //     marginRight: 'baz',
 * //     marginBottom: 'foo'
 * //   }
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
