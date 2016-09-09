import assign from './util/assign.js';

export default function borderWidth(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftWidth: arg.x, borderRightWidth: arg.x},
      arg.y && {borderTopWidth: arg.y, borderBottomWidth: arg.y},
      arg.top && {borderTopWidth: arg.top},
      arg.right && {borderRightWidth: arg.right},
      arg.bottom && {borderBottomWidth: arg.bottom},
      arg.left && {borderLeftWidth: arg.left}
    );
  }
  return {
    borderTopWidth: arg,
    borderRightWidth: arg,
    borderBottomWidth: arg,
    borderLeftWidth: arg
  };
}
