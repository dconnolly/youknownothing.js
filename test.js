'use strict';

var assert = require('assert');
var youknownothing = require('./');

it('should give me the classic line', function () {
  assert(youknownothing('Jon Snow'), "You know nothing, Jon Snow");
});
