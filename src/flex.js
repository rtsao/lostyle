import assign from './util/assign.js';

/**
 * Shorthand flex helper
 * @function flex
 * @param  {number|string|object} value
 * @param  {number|string}        [value.grow]   flex grow value
 * @param  {number|string}        [value.shrink] flex shrink value
 * @param  {number|string}        [value.basis]  flex basis value
 * @return {object}                              Style object
 */
export default function flex(arg) {
  return assign({},
    arg.grow && {flexGrow: arg.grow},
    arg.shrink && {flexShrink: arg.shrink},
    arg.basis && {flexBasis: arg.basis}
  );
}
