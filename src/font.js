import shorthand from './util/shorthand.js';

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
export default shorthand({
  style: 'fontStyle',
  variant: 'fontVariant',
  weight: 'fontWeight',
  stretch: 'fontStretch',
  size: 'fontSize',
  family: 'fontFamily'
});
