export default function shorthand(mapping) {
  return function(arg) {
    const target = {};
    for (const short in arg) {
      const long = mapping[short];
      if (long) {
        target[long] = arg[short];
      }
    }
    return target;
  }
}
