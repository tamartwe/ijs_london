'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 8080;

const app = (0, _express2.default)();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/*
  npm install --save-dev babel-cli babel-preset-flow
  {
    "presets": ["flow"]
  }
  ./node_modules/.bin/babel src/ -d lib/
  npm install --save-dev flow-bin
  "scripts": {
    "flow": "flow"
  }
  npm run flow init
  npm run flow
*/