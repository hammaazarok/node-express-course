const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
