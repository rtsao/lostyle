import assign from './util/assign.js';

export default function font(arg) {
  return assign({},
    arg.style && {fontStyle: arg.style},
    arg.variant && {fontVariant: arg.variant},
    arg.weight && {fontWeight: arg.weight},
    arg.stretch && {fontStretch: arg.stretch},
    arg.size && {fontSize: arg.size},
    arg.family && {fontFamily: arg.family}
  );
}
