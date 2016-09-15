import assign from './util/assign.js';

/**
 * Shorthand listStyle helper
 * @function listStyle
 * @param  {object}         value
 * @param  {number|string} [value.type]     listStyle type value
 * @param  {number|string} [value.position] listStyle position value
 * @param  {number|string} [value.image]    listStyle image value
 * @return {object}                          Style object
 * @example
 * // A single property
 * listStyle({type: 'foo'});
 * // → {
 * //     listStyleType: 'foo'
 * //   }
 * @example
 * // Multiple properties
 * listStyle({type: 'foo', position: 'bar'});
 * // → {
 * //     listStyleType: 'foo',
 * //     listStylePosition: 'bar'
 * //   }
 */
export default function listStyle(arg) {
  return assign({},
    arg.type && {listStyleType: arg.type},
    arg.position && {listStylePosition: arg.position},
    arg.image && {listStyleImage: arg.image}
  );
}
