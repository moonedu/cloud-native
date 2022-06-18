import express, { Request, Response }from 'express';
import os from 'os';

const router = express.Router();
const meminfo = {
  totalmem: os.totalmem(),
  freemem: os.freemem()
};
router.get('/api/getmem', (req: Request, res: Response) => {
  console.log(meminfo);
  res.send({meminfo});
});

export { router as getmemRouter }