const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, '..', 'src');

const files = fs.readdirSync(srcPath)
  .filter(filepath => {
    const {ext, name} = path.parse(filepath);
    return ext === '.js' && name !== 'index';
  })
  .map(filepath => path.parse(filepath).name);

const source = files
  .map(name => `export {default as ${name}} from './${name}.js';`)
  .concat('')
  .join('\n');

fs.writeFileSync(path.join(srcPath, 'index.js'), source, 'utf8');
