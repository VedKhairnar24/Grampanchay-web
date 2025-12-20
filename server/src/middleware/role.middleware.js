export const authorize = (roles = []) => {
  // roles can be a single role string or an array of role strings
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    if (!req.user || (roles.length && !roles.includes(req.user.role))) {
      // user's role is not authorized
      return res.status(403).json({ message: "Access denied" });
    }

    // authentication and authorization successful
    next();
  };
};

