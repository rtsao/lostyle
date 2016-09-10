import assign from './util/assign.js';

/**
 * Shorthand listStyle helper
 * @function listStyle
 * @param  {object}         value
 * @param  {number|string} [value.type]     listStyle type value
 * @param  {number|string} [value.position] listStyle position value
 * @param  {number|string} [value.image]    listStyle image value
 * @return {object}                          Style object
 */
export default function listStyle(arg) {
  return assign({},
    arg.type && {listStyleType: arg.type},
    arg.position && {listStylePosition: arg.position},
    arg.image && {listStyleImage: arg.image}
  );
}
