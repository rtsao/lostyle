const path = require('path');
const derivePkg = require('derive-pkg-core');

const basedir = path.resolve(__dirname, '..');

derivePkg({
  srcDir: basedir,
  destDir: path.join(basedir, 'dist'),
  transformFn: pkg => {
    return Object.assign({}, pkg, {
      main: 'index.js',
      module: 'es/index.js',
      devDependencies: undefined,
      scripts: undefined
    });
  }
}, (err) => {
  if (err) {
    console.log(err);
  }
});
