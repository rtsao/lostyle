import assign from './util/assign.js';

/**
 * Shorthand background helper
 * @function background
 * @param  {number|string|object} value
 * @param  {number|string}        [value.image]      background image value
 * @param  {number|string}        [value.position]   background position value
 * @param  {number|string}        [value.size]       background size value
 * @param  {number|string}        [value.repeat]     background repeat value
 * @param  {number|string}        [value.origin]     background origin value
 * @param  {number|string}        [value.clip]       background clip value
 * @param  {number|string}        [value.attachment] background attachment value
 * @param  {number|string}        [value.color]      background color value
 * @return {object}                                  Style object
 */
export default function background(arg) {
  return assign({},
    arg.image && {backgroundImage: arg.image},
    arg.position && {backgroundPosition: arg.position},
    arg.size && {backgroundSize: arg.size},
    arg.repeat && {backgroundRepeat: arg.repeat},
    arg.origin && {backgroundOrigin: arg.origin},
    arg.clip && {backgroundClip: arg.clip},
    arg.attachment && {backgroundAttachment: arg.attachment},
    arg.color && {backgroundColor: arg.color}
  );
}
