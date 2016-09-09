import assign from './util/assign.js';

export default function borderStyle(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {borderLeftStyle: arg.x, borderRightStyle: arg.x},
      arg.y && {borderTopStyle: arg.y, borderBottomStyle: arg.y},
      arg.top && {borderTopStyle: arg.top},
      arg.right && {borderRightStyle: arg.right},
      arg.bottom && {borderBottomStyle: arg.bottom},
      arg.left && {borderLeftStyle: arg.left}
    );
  }
  return {
    borderTopStyle: arg,
    borderRightStyle: arg,
    borderBottomStyle: arg,
    borderLeftStyle: arg
  };
}
