import assign from './util/assign.js';

export default function borderColor(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftColor: arg.x, borderRightColor: arg.x},
      arg.y && {borderTopColor: arg.y, borderBottomColor: arg.y},
      arg.top && {borderTopColor: arg.top},
      arg.right && {borderRightColor: arg.right},
      arg.bottom && {borderBottomColor: arg.bottom},
      arg.left && {borderLeftColor: arg.left}
    );
  }
  return {
    borderTopColor: arg,
    borderRightColor: arg,
    borderBottomColor: arg,
    borderLeftColor: arg
  };
}
