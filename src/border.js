import assign from './util/assign.js';
import borderColor from './borderColor.js';
import borderStyle from './borderStyle.js';
import borderWidth from './borderWidth.js';
import borderRadius from './borderRadius.js';

/**
 * Shorthand border helper
 * @function border
 * @param  {object}  value
 * @param  {number|string|object} [value.color]  border color value (see {@link borderColor})
 * @param  {number|string|object} [value.style]  border style value (see {@link borderStyle})
 * @param  {number|string|object} [value.width]  border width value (see {@link borderWidth})
 * @param  {number|string|object} [value.radius] border radius value (see {@link borderRadius})
 * @return {object}                              Style object
 * @example
 * // A single property in all directions
 * border({color: 'red'});
 * // → {
 * //     borderTopColor: 'red',
 * //     borderRightColor: 'red',
 * //     borderBottomColor: 'red',
 * //     borderLeftColor: 'red'
 * //   }
 * @example
 * // Any combination
 * border({color: 'red', width: {y: '2px', right: '8px'}});
 * // → {
 * //     borderTopColor: 'red',
 * //     borderRightColor: 'red',
 * //     borderBottomColor: 'red',
 * //     borderLeftColor: 'red',
 * //     borderTopWidth: '2px',
 * //     borderRightWidth: '8px',
 * //     borderBottomWidth: '2px'
 * //   }
 */
export default function border(arg) {
  return assign({},
    arg.color && borderColor(arg.color),
    arg.style && borderStyle(arg.style),
    arg.width && borderWidth(arg.width),
    arg.radius && borderRadius(arg.radius)
  );
}
