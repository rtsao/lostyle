import directional from './util/directional.js';

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
export default directional(
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft'
);
