import assign from './util/assign.js';

/**
 * Shorthand borderImage helper
 * @function borderImage
 * @param  {object}         value
 * @param  {number|string} [value.source] borderImage source value
 * @param  {number|string} [value.slice]  borderImage slice value
 * @param  {number|string} [value.width]  borderImage width value
 * @param  {number|string} [value.outset] borderImage outset value
 * @param  {number|string} [value.repeat] borderImage repeat value
 * @return {object}                        Style object
 */
export default function borderImage(arg) {
  return assign({},
    arg.source && {borderImageSource: arg.source},
    arg.slice && {borderImageSlice: arg.slice},
    arg.width && {borderImageWidth: arg.width},
    arg.outset && {borderImageOutset: arg.outset},
    arg.repeat && {borderImageRepeat: arg.repeat}
  );
}
