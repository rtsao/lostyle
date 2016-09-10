const properties = [
  ['margin', {
    top: 'marginTop',
    right: 'marginRight',
    bottom: 'marginBottom',
    left: 'marginLeft'
  }],
  ['padding', {
    top: 'paddingTop',
    right: 'paddingRight',
    bottom: 'paddingBottom',
    left: 'paddingLeft'
  }],
  ['borderColor', {
    top: 'borderTopColor',
    right: 'borderRightColor',
    bottom: 'borderBottomColor',
    left: 'borderLeftColor'
  }],
  ['borderStyle', {
    top: 'borderTopStyle',
    right: 'borderRightStyle',
    bottom: 'borderBottomStyle',
    left: 'borderLeftStyle'
  }],
  ['borderWidth', {
    top: 'borderTopWidth',
    right: 'borderRightWidth',
    bottom: 'borderBottomWidth',
    left: 'borderLeftWidth'
  }],
  ['borderRadius', {
    top: 'borderTopRadius',
    right: 'borderRightRadius',
    bottom: 'borderBottomRadius',
    left: 'borderLeftRadius'
  }]
];

module.exports = properties.map(args => ({
  name: args[0],
  source: generateSrc(...args)
}));

function generateSrc(basename, {top, right, bottom, left}) {
  return (
`/**
 * Directional ${basename} helper
 * @function ${basename}
 * @param  {number|string|object} value
 * @param  {number|string}        [value.x]      X-axis value
 * @param  {number|string}        [value.y]      Y-axis value
 * @param  {number|string}        [value.top]    Top value
 * @param  {number|string}        [value.right]  Right value
 * @param  {number|string}        [value.bottom] Bottom value
 * @param  {number|string}        [value.left]   Left value
 * @return {object}                              Style object
 */
export default function ${basename}(arg) {
  if (typeof arg === 'object' && arg !== null) {
    return assign({},
      arg.x && {${left}: arg.x, ${right}: arg.x},
      arg.y && {${top}: arg.y, ${bottom}: arg.y},
      arg.top && {${top}: arg.top},
      arg.right && {${right}: arg.right},
      arg.bottom && {${bottom}: arg.bottom},
      arg.left && {${left}: arg.left}
    );
  }
  return {
    ${top}: arg,
    ${right}: arg,
    ${bottom}: arg,
    ${left}: arg
  };
}`);
}
