import assign from './util/assign.js';

/**
 * Shorthand outline helper
 * @function outline
 * @param  {object}         value
 * @param  {number|string} [value.width] outline width value
 * @param  {number|string} [value.style] outline style value
 * @param  {number|string} [value.color] outline color value
 * @return {object}                       Style object
 */
export default function outline(arg) {
  return assign({},
    arg.width && {outlineWidth: arg.width},
    arg.style && {outlineStyle: arg.style},
    arg.color && {outlineColor: arg.color}
  );
}
