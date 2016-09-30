const fs = require('fs');
const path = require('path');
const directional = require('./generate-directional');
const shorthand = require('./generate-shorthand');

const srcPath = path.resolve(__dirname, '..', 'src');

function writeFile({name, source}) {
  const dest = path.join(srcPath, `${name}.js`);
  fs.writeFileSync(dest, source, 'utf8');
}

directional.forEach(writeFile);
shorthand.forEach(writeFile);
