const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const validatetoken = asynchandler(async (req, res, next) => {
  try {
    const auth = req.headers.authorization || req.headers.Authorization;
    if (!auth || !auth.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'Authorization token required' });
    }
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid token', error: error.message });
  }
});

module.exports = validatetoken;
