require('dotenv').config({ path: '../.env' });
// import { DiceController } from './controllers/diceController.ts';

const express = require('express');
const app = express();

const port = process.env.PORT;

// const diceController = new DiceController();

app.get('/', () => {
  Response.json({ text: 'Hello, World!' });
});

// app.get('/api/dice', (req, res) => {
//   return diceController.roll(req, res);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
