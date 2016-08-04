import test = require('blue-tape');
import target = require('react-router');

test('shape', t => {
  t.true(target.applyRouterMiddleware, 'applyRouterMiddleware exists');
  t.end();
});
