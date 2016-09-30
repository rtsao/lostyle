import directional from './util/directional.js';

/**
 * Directional borderStyle helper
 * @function borderStyle
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
 * borderStyle('foo');
 * // → {
 * //     borderTopStyle: 'foo',
 * //     borderRightStyle: 'foo',
 * //     borderBottomStyle: 'foo',
 * //     borderLeftStyle: 'foo'
 * //   }
 * @example
 * // A single axis
 * borderStyle({x: 'bar'});
 * // → {
 * //     borderLeftStyle: 'bar',
 * //     borderRightStyle: 'bar'
 * //   }
 * @example
 * // Any combination
 * borderStyle({y: 'foo', top: 'bar', right: 'baz'});
 * // → {
 * //     borderTopStyle: 'bar',
 * //     borderRightStyle: 'baz',
 * //     borderBottomStyle: 'foo'
 * //   }
 */
export default directional(
  'borderTopStyle',
  'borderRightStyle',
  'borderBottomStyle',
  'borderLeftStyle'
);
