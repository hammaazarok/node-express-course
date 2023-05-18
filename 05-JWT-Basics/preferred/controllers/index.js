const jwt = require('jsonwebtoken');

const signToken = (name) =>
  jwt.sign({ username: name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const logon = async (req, res) => {
  const { name } = req.body;

  if (name){
    const token = signToken(name);
    res.status(200).json({ token });
  }else{
    res.status(400).json({ message: "name parameter is required" });
  }

};

const hello = async (req, res) => {
  const { name } = req.user;
  if (name) {
    res.status(200).json({ message: `Welcome to CTD ${name}` });
  } else {
    res.status(400).json({ message: "name parameter is required" });
  }


};

module.exports = { logon, hello };