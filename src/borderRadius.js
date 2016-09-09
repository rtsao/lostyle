import assign from './util/assign.js';

export default function borderRadius(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftRadius: arg.x, borderRightRadius: arg.x},
      arg.y && {borderTopRadius: arg.y, borderBottomRadius: arg.y},
      arg.top && {borderTopRadius: arg.top},
      arg.right && {borderRightRadius: arg.right},
      arg.bottom && {borderBottomRadius: arg.bottom},
      arg.left && {borderLeftRadius: arg.left}
    );
  }
  return {
    borderTopRadius: arg,
    borderRightRadius: arg,
    borderBottomRadius: arg,
    borderLeftRadius: arg
  };
}
