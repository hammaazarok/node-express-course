const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'amejid') {
    req.user = { name: 'amejid', id: 39 };
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
