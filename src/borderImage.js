import assign from './util/assign.js';

export default function borderImage(arg) {
  return assign({},
    arg.source && {borderImageSource: arg.source},
    arg.slice && {borderImageSlice: arg.slice},
    arg.width && {borderImageWidth: arg.width},
    arg.outset && {borderImageOutset: arg.outset},
    arg.repeat && {borderImageRepeat: arg.repeat}
  );
}
