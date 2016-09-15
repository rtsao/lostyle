import assign from './util/assign.js';

/**
 * Directional borderRadius helper
 * @function borderRadius
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
 * borderRadius('foo');
 * // → {
 * //     borderTopRadius: 'foo',
 * //     borderRightRadius: 'foo',
 * //     borderBottomRadius: 'foo',
 * //     borderLeftRadius: 'foo'
 * //   }
 * @example
 * // A single axis
 * borderRadius({x: 'bar'});
 * // → {
 * //     borderLeftRadius: 'bar',
 * //     borderRightRadius: 'bar'
 * //   }
 * @example
 * // Any combination
 * borderRadius({y: 'foo', top: 'bar', right: 'baz'});
 * // → {
 * //     borderTopRadius: 'bar',
 * //     borderRightRadius: 'baz',
 * //     borderBottomRadius: 'foo'
 * //   }
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
