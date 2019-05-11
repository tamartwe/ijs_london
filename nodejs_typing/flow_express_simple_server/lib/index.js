'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 8080;
const app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, '..', '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(_path2.default.join(__dirname, '..', '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});