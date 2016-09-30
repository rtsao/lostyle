export default function directional(top, right, bottom, left) {
  return function(arg) {
    const target = {};
    if (typeof arg === 'object' && arg !== null) {
      if (arg.x) { target[left] = arg.x; target[right] = arg.x; }
      if (arg.y) { target[top] = arg.y, target[bottom] = arg.y; }
      if (arg.top) { target[top] = arg.top; }
      if (arg.right) { target[right] = arg.right; }
      if (arg.bottom) { target[bottom] = arg.bottom; }
      if (arg.left) { target[left] = arg.left; }
      return target;
    }
    target[top] = arg;
    target[right] = arg;
    target[bottom] = arg;
    target[left] = arg;
    return target;
  }
}
