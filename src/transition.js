import assign from './util/assign.js';

/**
 * Shorthand transition helper
 * @function transition
 * @param  {object}         value
 * @param  {number|string} [value.property]       transition property value
 * @param  {number|string} [value.duration]       transition duration value
 * @param  {number|string} [value.timingFunction] transition timingFunction value
 * @param  {number|string} [value.delay]          transition delay value
 * @return {object}                                Style object
 * @example
 * // A single property
 * transition({property: 'foo'});
 * // → {
 * //     transitionProperty: 'foo'
 * //   }
 * @example
 * // Multiple properties
 * transition({property: 'foo', duration: 'bar'});
 * // → {
 * //     transitionProperty: 'foo',
 * //     transitionDuration: 'bar'
 * //   }
 */
export default function transition(arg) {
  return assign({},
    arg.property && {transitionProperty: arg.property},
    arg.duration && {transitionDuration: arg.duration},
    arg.timingFunction && {transitionTimingFunction: arg.timingFunction},
    arg.delay && {transitionDelay: arg.delay}
  );
}
