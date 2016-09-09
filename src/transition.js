import assign from './util/assign.js';

export default function transition(arg) {
  return assign({},
    arg.property && {transitionProperty: arg.property},
    arg.duration && {transitionDuration: arg.duration},
    arg.timingFunction && {transitionTimingFunction: arg.timingFunction},
    arg.delay && {transitionDelay: arg.delay}
  );
}
