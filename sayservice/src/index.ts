import express from 'express';
import cors from 'cors';

import { sayhelloRouter } from './module/sayservice';

const app = express();

app.use(express.json());
app.use(cors());

app.use(sayhelloRouter);

app.all('*', async (req, res) => {
  res.send({});
});

app.listen(3003, () => {
  console.log('sayhello app started. listen on 3003 port.');
})