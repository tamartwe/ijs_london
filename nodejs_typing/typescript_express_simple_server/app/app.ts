/*
npm install typescript -s
"scripts": {
    "tsc": "tsc"
}
npm run tsc -- --init
npm install express -s
npm install @types/express -s
npm run tsc
*/



// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});