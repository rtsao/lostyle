import assign from './util/assign.js';

export default function background(arg) {
  return assign({},
    arg.image && {backgroundImage: arg.image},
    arg.position && {backgroundPosition: arg.position},
    arg.size && {backgroundSize: arg.size},
    arg.repeat && {backgroundRepeat: arg.repeat},
    arg.origin && {backgroundOrigin: arg.origin},
    arg.clip && {backgroundClip: arg.clip},
    arg.attachment && {backgroundAttachment: arg.attachment},
    arg.color && {backgroundColor: arg.color}
  );
}
