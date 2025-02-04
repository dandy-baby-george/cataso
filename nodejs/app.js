const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

const port = 3000;

app.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [rows] = await connection.execute('SELECT "Hello, MySQL!" AS message');
    res.send(rows[0]);
    connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`Node.js app running at http://localhost:${port}`);
});
