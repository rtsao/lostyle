import assign from './util/assign.js';

export default function border(arg) {
  return assign({},
    arg.color && borderColor(arg),
    arg.style && borderStyle(arg),
    arg.width && borderWidth(arg),
    arg.radius && borderRadius(arg)
  );
}
