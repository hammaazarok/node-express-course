const jwt = require('jsonwebtoken');

const signToken = (name) =>
  jwt.sign({ username: name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const logon = async (req, res) => {
  const { name } = req.body;

  const token = signToken(name);

  res.status(200).json({ token });
};

const hello = async (req, res) => {
  const { name } = req.user;

  res.status(200).json({ message: `Welcome to CTD ${name}` });
};

module.exports = { logon, hello };