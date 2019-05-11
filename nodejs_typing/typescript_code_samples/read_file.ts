import * as fs from 'fs';
import * as util from 'util';


const readFile = util.promisify(fs.readFile);

async function readFileContent (encoding: string) :
  Promise<string> {
  if (encoding) {
    return readFile('./myFile.txt', encoding);
  } else {
    return readFile('./myFile.txt');
  }
}

async function readFileWrapper () {
  const fileContentEncoding = await readFileContent('utf8');
  console.log(fileContentEncoding);
  const fileContentNoEncoding = await readFileContent();
  console.log(fileContentNoEncoding);
}

readFileWrapper();
