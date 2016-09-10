import assign from './util/assign.js';
import borderColor from './borderColor.js';
import borderStyle from './borderStyle.js';
import borderWidth from './borderWidth.js';
import borderRadius from './borderRadius.js';

/**
 * Shorthand border helper
 * @function border
 * @param  {object}  value
 * @param  {object} [value.color]  border color value
 * @param  {object} [value.style]  border style value
 * @param  {object} [value.width]  border with value
 * @param  {object} [value.radius] border radius value
 * @return {object}                Style object
 */
export default function border(arg) {
  return assign({},
    arg.color && borderColor(arg.color),
    arg.style && borderStyle(arg.style),
    arg.width && borderWidth(arg.width),
    arg.radius && borderRadius(arg.radius)
  );
}
