import assign from './util/assign.js';

export default function flex(arg) {
  return assign({},
    arg.grow && {flexGrow: arg.grow},
    arg.shrink && {flexShrink: arg.shrink},
    arg.basis && {flexBasis: arg.basis}
  );
}
