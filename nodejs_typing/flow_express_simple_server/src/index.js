// @flow
import express, {
  type $Application,
  type $Request,
  type $Response,
} from 'express';
import path from 'path';

const PORT: number = 8080;
const app: $Application = express();

app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('*', (req: $Request, res: $Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
