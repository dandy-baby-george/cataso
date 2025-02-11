// require('dotenv').config({ path: '../.env' });
// import { DiceController } from './controllers/diceController.ts';

const express = require('express');
const app = express();

// const port = process.env.PORT;
const port = 3000;

// const diceController = new DiceController();

app.get("/", (req, res) => {
  res.send("hello world");
})

// app.get('/api/dice', (req, res) => {
//   return diceController.roll(req, res);
// });

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
