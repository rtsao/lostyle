const properties = [
  ['listStyle', ['type', 'position', 'image']],
  ['outline', ['width', 'style', 'color']],
  ['background', ['image', 'position', 'size', 'repeat', 'origin', 'clip', 'attachment', 'color']],
  ['transition', ['property', 'duration', 'timingFunction', 'delay']],
  ['font', ['style', 'variant', 'weight', 'stretch', 'size', 'family']],
  ['borderImage', ['source', 'slice', 'width', 'outset', 'repeat']],
  ['flex', ['grow', 'shrink', 'basis']],
  ['animation', ['name', 'duration', 'timingFunction', 'delay', 'iterationCount', 'direction', 'fillMode', 'playState']]
];

module.exports = properties.map(args => ({
  name: args[0],
  source: generateSrc(...args)
}));

function generateSrc(basename, props) {
  const stuff = props.map(property =>
`    arg.${property} && {${joinShorthand(basename, property)}: arg.${property}}`
  );

  const maxLen = props.reduce((largest, property) => Math.max(largest, property.length), 0);
  const paramdocs = props.map(property => {
  const padding = Array(maxLen + 1 - property.length).fill(' ').join('');
return ` * @param  {number|string}        [value.${property}]${padding}${basename} ${property} value`
  });

  return (
`/**
 * Shorthand ${basename} helper
 * @function ${basename}
 * @param  {number|string|object} value
${paramdocs.join('\n')}
 * @return {object}                       ${Array(maxLen).fill(' ').join('')} Style object
 */
export default function ${basename}(arg) {
  return assign({},
${stuff.join(',\n')}
  );
}`
);
}

function joinShorthand(basename, shorthand) {
  return `${basename}${shorthand.charAt(0).toUpperCase()}${shorthand.slice(1)}`;
}
