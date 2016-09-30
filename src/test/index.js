import test from 'tape';

import margin from '../margin.js';
import animation from '../animation.js';

test('margin basic test', t => {
  t.deepEqual(margin('foo'), {
    marginTop: 'foo',
    marginRight: 'foo',
    marginBottom: 'foo',
    marginLeft: 'foo'
  });
  t.end();
});

test('animation basic test', t => {
  t.deepEqual(animation({name: 'foo', duration: 'bar'}), {
    animationName: 'foo',
    animationDuration: 'bar'
  });
  t.end();
});
