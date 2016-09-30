import shorthand from './util/shorthand.js';

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
 * @example
 * // A single property
 * borderImage({source: 'foo'});
 * // → {
 * //     borderImageSource: 'foo'
 * //   }
 * @example
 * // Multiple properties
 * borderImage({source: 'foo', slice: 'bar'});
 * // → {
 * //     borderImageSource: 'foo',
 * //     borderImageSlice: 'bar'
 * //   }
 */
export default shorthand({
  source: 'borderImageSource',
  slice: 'borderImageSlice',
  width: 'borderImageWidth',
  outset: 'borderImageOutset',
  repeat: 'borderImageRepeat'
});
