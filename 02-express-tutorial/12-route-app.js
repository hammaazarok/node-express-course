const express = require('express');
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

const app = express();

app.use(express.static('./methods-public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
