import shorthand from './util/shorthand.js';

/**
 * Shorthand outline helper
 * @function outline
 * @param  {object}         value
 * @param  {number|string} [value.width] outline width value
 * @param  {number|string} [value.style] outline style value
 * @param  {number|string} [value.color] outline color value
 * @return {object}                       Style object
 * @example
 * // A single property
 * outline({width: 'foo'});
 * // → {
 * //     outlineWidth: 'foo'
 * //   }
 * @example
 * // Multiple properties
 * outline({width: 'foo', style: 'bar'});
 * // → {
 * //     outlineWidth: 'foo',
 * //     outlineStyle: 'bar'
 * //   }
 */
export default shorthand({
  width: 'outlineWidth',
  style: 'outlineStyle',
  color: 'outlineColor'
});
