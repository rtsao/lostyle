import assign from './util/assign.js';

export default function padding(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {paddingLeft: arg.x, paddingRight: arg.x},
      arg.y && {paddingTop: arg.y, paddingBottom: arg.y},
      arg.top && {paddingTop: arg.top},
      arg.right && {paddingRight: arg.right},
      arg.bottom && {paddingBottom: arg.bottom},
      arg.left && {paddingLeft: arg.left}
    );
  }
  return {
    paddingTop: arg,
    paddingRight: arg,
    paddingBottom: arg,
    paddingLeft: arg
  };
}
