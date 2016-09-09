const path = require('path');
const derivePkg = require('derive-pkg-core');

const basedir = path.resolve(__dirname, '..');

derivePkg({
  srcDir: basedir,
  destDir: path.join(basedir, 'dist'),
  transformFn: pkg => {
    delete pkg.devDependencies;
    delete pkg.scripts;
    return Object.assign({}, pkg, {
      main: 'index.js',
      module: 'es/index.js'
    });
  }
}, (err) => {
  if (err) {
    console.log(err);
  }
});
