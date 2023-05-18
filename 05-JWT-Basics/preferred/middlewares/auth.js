const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  const token = req.headers?.authorization?.split('Bearer ')[1];
  if (!token) {
    return res.status(401).json({ message: 'unauthorized' });
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: err });
  }

  req.user = { name: decoded.username };

  next();
};

module.exports = { protect };