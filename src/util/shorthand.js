export default function shorthand(mapping) {
  return function(arg) {
    var target = {};
    for (var short in arg) {
      var long = mapping[short];
      if (long) {
        target[long] = arg[short];
      }
    }
    return target;
  }
}
