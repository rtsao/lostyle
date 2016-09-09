import assign from './util/assign.js';

export default function outline(arg) {
  return assign({},
    arg.width && {outlineWidth: arg.width},
    arg.style && {outlineStyle: arg.style},
    arg.color && {outlineColor: arg.color}
  );
}
