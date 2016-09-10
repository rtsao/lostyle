import assign from './util/assign.js';

/**
 * Shorthand animation helper
 * @function animation
 * @param  {number|string|object} value
 * @param  {number|string}        [value.name]           animation name value
 * @param  {number|string}        [value.duration]       animation duration value
 * @param  {number|string}        [value.timingFunction] animation timingFunction value
 * @param  {number|string}        [value.delay]          animation delay value
 * @param  {number|string}        [value.iterationCount] animation iterationCount value
 * @param  {number|string}        [value.direction]      animation direction value
 * @param  {number|string}        [value.fillMode]       animation fillMode value
 * @param  {number|string}        [value.playState]      animation playState value
 * @return {object}                                      Style object
 */
export default function animation(arg) {
  return assign({},
    arg.name && {animationName: arg.name},
    arg.duration && {animationDuration: arg.duration},
    arg.timingFunction && {animationTimingFunction: arg.timingFunction},
    arg.delay && {animationDelay: arg.delay},
    arg.iterationCount && {animationIterationCount: arg.iterationCount},
    arg.direction && {animationDirection: arg.direction},
    arg.fillMode && {animationFillMode: arg.fillMode},
    arg.playState && {animationPlayState: arg.playState}
  );
}
