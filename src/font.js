import assign from './util/assign.js';

/**
 * Shorthand font helper
 * @function font
 * @param  {object}         value
 * @param  {number|string} [value.style]   font style value
 * @param  {number|string} [value.variant] font variant value
 * @param  {number|string} [value.weight]  font weight value
 * @param  {number|string} [value.stretch] font stretch value
 * @param  {number|string} [value.size]    font size value
 * @param  {number|string} [value.family]  font family value
 * @return {object}                         Style object
 * @example
 * // A single property
 * font({style: 'foo'});
 * // → {
 * //     fontStyle: 'foo'
 * //   }
 * @example
 * // Multiple properties
 * font({style: 'foo', variant: 'bar'});
 * // → {
 * //     fontStyle: 'foo',
 * //     fontVariant: 'bar'
 * //   }
 */
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
