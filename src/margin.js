import assign from './util/assign.js';

export default function margin(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {marginLeft: arg.x, marginRight: arg.x},
      arg.y && {marginTop: arg.y, marginBottom: arg.y},
      arg.top && {marginTop: arg.top},
      arg.right && {marginRight: arg.right},
      arg.bottom && {marginBottom: arg.bottom},
      arg.left && {marginLeft: arg.left}
    );
  }
  return {
    marginTop: arg,
    marginRight: arg,
    marginBottom: arg,
    marginLeft: arg
  };
}
