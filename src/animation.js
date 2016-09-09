import assign from './util/assign.js';

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
