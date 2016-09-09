import assign from './util/assign.js';

export default function listStyle(arg) {
  return assign({},
    arg.type && {listStyleType: arg.type},
    arg.position && {listStylePosition: arg.position},
    arg.image && {listStyleImage: arg.image}
  );
}
