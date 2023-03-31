const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home');
});

app.get('/about', (req, res) => {
  res.status(200).send('About');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404</h1>');
});

app.listen(5000, () => console.log('Server started on 5000'));
