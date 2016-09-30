import shorthand from './util/shorthand.js';

/**
 * Shorthand background helper
 * @function background
 * @param  {object}         value
 * @param  {number|string} [value.image]      background image value
 * @param  {number|string} [value.position]   background position value
 * @param  {number|string} [value.size]       background size value
 * @param  {number|string} [value.repeat]     background repeat value
 * @param  {number|string} [value.origin]     background origin value
 * @param  {number|string} [value.clip]       background clip value
 * @param  {number|string} [value.attachment] background attachment value
 * @param  {number|string} [value.color]      background color value
 * @return {object}                            Style object
 * @example
 * // A single property
 * background({image: 'foo'});
 * // → {
 * //     backgroundImage: 'foo'
 * //   }
 * @example
 * // Multiple properties
 * background({image: 'foo', position: 'bar'});
 * // → {
 * //     backgroundImage: 'foo',
 * //     backgroundPosition: 'bar'
 * //   }
 */
export default shorthand({
  image: 'backgroundImage',
  position: 'backgroundPosition',
  size: 'backgroundSize',
  repeat: 'backgroundRepeat',
  origin: 'backgroundOrigin',
  clip: 'backgroundClip',
  attachment: 'backgroundAttachment',
  color: 'backgroundColor'
});
