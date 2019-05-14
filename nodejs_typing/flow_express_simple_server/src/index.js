// @flow
import express, {
  type $Application,
  type $Request,
  type $Response,
} from 'express';

const PORT: number = 8080;
const app: $Application = express();

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
