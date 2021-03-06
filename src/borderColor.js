import directional from './util/directional.js';

/**
 * Directional borderColor helper
 * @function borderColor
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
 * borderColor('foo');
 * // → {
 * //     borderTopColor: 'foo',
 * //     borderRightColor: 'foo',
 * //     borderBottomColor: 'foo',
 * //     borderLeftColor: 'foo'
 * //   }
 * @example
 * // A single axis
 * borderColor({x: 'bar'});
 * // → {
 * //     borderLeftColor: 'bar',
 * //     borderRightColor: 'bar'
 * //   }
 * @example
 * // Any combination
 * borderColor({y: 'foo', top: 'bar', right: 'baz'});
 * // → {
 * //     borderTopColor: 'bar',
 * //     borderRightColor: 'baz',
 * //     borderBottomColor: 'foo'
 * //   }
 */
export default directional(
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor'
);
