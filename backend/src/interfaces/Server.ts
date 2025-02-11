import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { DiceController } from './controllers/DiceController';

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!');
});

app.get('/api/dice', (req: Request, res: Response) => {
  const diceController = new DiceController();

  return diceController.roll(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
