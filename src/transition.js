import assign from './util/assign.js';

/**
 * Shorthand transition helper
 * @function transition
 * @param  {number|string|object} value
 * @param  {number|string}        [value.property]       transition property value
 * @param  {number|string}        [value.duration]       transition duration value
 * @param  {number|string}        [value.timingFunction] transition timingFunction value
 * @param  {number|string}        [value.delay]          transition delay value
 * @return {object}                                      Style object
 */
export default function transition(arg) {
  return assign({},
    arg.property && {transitionProperty: arg.property},
    arg.duration && {transitionDuration: arg.duration},
    arg.timingFunction && {transitionTimingFunction: arg.timingFunction},
    arg.delay && {transitionDelay: arg.delay}
  );
}
