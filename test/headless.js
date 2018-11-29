global.window = global;
global.assert = require('chai').assert;
require('../src/js/cipher.js');
require('./cipher.spec.js');
