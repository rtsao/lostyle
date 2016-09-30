import directional from './util/directional.js';

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
export default directional(
  'borderTopRadius',
  'borderRightRadius',
  'borderBottomRadius',
  'borderLeftRadius'
);
