const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('404');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
