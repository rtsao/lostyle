import directional from './util/directional.js';

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
 * @example
 * // All directions
 * padding('foo');
 * // → {
 * //     paddingTop: 'foo',
 * //     paddingRight: 'foo',
 * //     paddingBottom: 'foo',
 * //     paddingLeft: 'foo'
 * //   }
 * @example
 * // A single axis
 * padding({x: 'bar'});
 * // → {
 * //     paddingLeft: 'bar',
 * //     paddingRight: 'bar'
 * //   }
 * @example
 * // Any combination
 * padding({y: 'foo', top: 'bar', right: 'baz'});
 * // → {
 * //     paddingTop: 'bar',
 * //     paddingRight: 'baz',
 * //     paddingBottom: 'foo'
 * //   }
 */
export default directional(
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft'
);
