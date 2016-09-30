import shorthand from './util/shorthand.js';

/**
 * Shorthand animation helper
 * @function animation
 * @param  {object}         value
 * @param  {number|string} [value.name]           animation name value
 * @param  {number|string} [value.duration]       animation duration value
 * @param  {number|string} [value.timingFunction] animation timingFunction value
 * @param  {number|string} [value.delay]          animation delay value
 * @param  {number|string} [value.iterationCount] animation iterationCount value
 * @param  {number|string} [value.direction]      animation direction value
 * @param  {number|string} [value.fillMode]       animation fillMode value
 * @param  {number|string} [value.playState]      animation playState value
 * @return {object}                                Style object
 * @example
 * // A single property
 * animation({name: 'foo'});
 * // → {
 * //     animationName: 'foo'
 * //   }
 * @example
 * // Multiple properties
 * animation({name: 'foo', duration: 'bar'});
 * // → {
 * //     animationName: 'foo',
 * //     animationDuration: 'bar'
 * //   }
 */
export default shorthand({
  name: 'animationName',
  duration: 'animationDuration',
  timingFunction: 'animationTimingFunction',
  delay: 'animationDelay',
  iterationCount: 'animationIterationCount',
  direction: 'animationDirection',
  fillMode: 'animationFillMode',
  playState: 'animationPlayState'
});
