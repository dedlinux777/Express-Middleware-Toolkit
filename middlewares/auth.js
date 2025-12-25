const authMiddleware = (req, res, next) => {
  let { token } = req.query;
  if (token === 'pass') {
    return next();
  }
  // This will be caught by our custom error handler in app.js
  const error = new Error("ACCESS DENIED: Invalid Token");
  error.status = 401; 
  throw error;
};

module.exports = authMiddleware;