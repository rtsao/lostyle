# lostyle

[![npm version][npm-badge]][npm-href]
[![dependencies status][deps-badge]][deps-href]

A JavaScript style utility library

## Usage

```
npm install lostyle --save
```

```js
import {margin, border} from 'lostyle';

margin({x: 'auto'});
/*
{ marginLeft: '5px',
  marginRight: '5px' }
*/

border({
  color: {x: 'red', bottom: 'blue'},
  width: '1px',
  radius: {y: '3px'}
});
/*
{ borderLeftColor: 'red',
  borderRightColor: 'red',
  borderBottomColor: 'blue',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderBottomWidth: '1px',
  borderLeftWidth: '1px',
  borderTopRadius: '3px',
  borderBottomRadius: '3px' }
*/
```

[npm-badge]: https://badge.fury.io/js/lostyle.svg
[npm-href]: https://www.npmjs.com/package/lostyle
[deps-badge]: https://img.shields.io/badge/dependencies-none-brightgreen.svg
[deps-href]: https://david-dm.org/rtsao/lostyle
