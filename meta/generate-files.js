const fs = require('fs');
const path = require('path');
const directional = require('./generate-directional');
const shorthand = require('./generate-shorthand');

const srcPath = path.resolve(__dirname, '..', 'src');

function writeFile({name, source}) {
  const dest = path.join(srcPath, `${name}.js`);
  const contents = [
    `import assign from './util/assign.js';\n`,
    source,
    ''
  ].join('\n');

  fs.writeFileSync(dest, contents, 'utf8');
}

directional.forEach(writeFile);
shorthand.forEach(writeFile);
