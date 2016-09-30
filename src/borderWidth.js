import directional from './util/directional.js';

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
 * @example
 * // All directions
 * borderWidth('foo');
 * // → {
 * //     borderTopWidth: 'foo',
 * //     borderRightWidth: 'foo',
 * //     borderBottomWidth: 'foo',
 * //     borderLeftWidth: 'foo'
 * //   }
 * @example
 * // A single axis
 * borderWidth({x: 'bar'});
 * // → {
 * //     borderLeftWidth: 'bar',
 * //     borderRightWidth: 'bar'
 * //   }
 * @example
 * // Any combination
 * borderWidth({y: 'foo', top: 'bar', right: 'baz'});
 * // → {
 * //     borderTopWidth: 'bar',
 * //     borderRightWidth: 'baz',
 * //     borderBottomWidth: 'foo'
 * //   }
 */
export default directional(
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth'
);
