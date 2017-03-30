'use strict';

const babel = require('babel-core');


const expected = `
'use strict';

var _App = require('../components/3-pages/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
`.trim();

const { code } = babel.transformFileSync('./src/containers/Root.js');

console.log(code === expected);
