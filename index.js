const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const getData = () => {
  const data = fs.readFileSync('data.json');
  return JSON.parse(data);
};

app.get('/cars', (req, res) => {
  const data = getData();
  res.json(data.cars);
});

app.get('/bikes', (req, res) => {
  const data = getData();
  res.json(data.bikes);
});

app.get('/all', (req, res) => {
  const data = getData();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
