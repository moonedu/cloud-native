import express, { Request, Response }from 'express';
import os from 'os';

const router = express.Router();
const meminfo = {
  totalmem: os.totalmem(),
  freemem: os.freemem(),
  cpu: os.cpus(),
};
router.get('/api/getmem', (req: Request, res: Response) => {
  res.send({meminfo});
});

export { router as getmemRouter }