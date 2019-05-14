
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const readFileContent = async (encoding) => {
  if (encoding) {
    return readFile('./myFile.txt', encoding);
  } else {
    return readFile('./myFile.txt');
  }
};

const readFileWrapper = async () => {
  const fileContentEncoding = await readFileContent('utf8');
  console.log(fileContentEncoding);
  const fileContentNoEncoding = await readFileContent();
  console.log(fileContentNoEncoding);
};

readFileWrapper();
