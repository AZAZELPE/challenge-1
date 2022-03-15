import express from 'express';
import bodyParser from 'body-parser';
import { setUpRouter } from './api';

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
setUpRouter(app);

app.listen(PORT, () => {
  console.log('server initialized');
});
