isMartket = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'market') {
        console.log(token, 'token from auth')
        return next()
    } else {
      res
        .status(403)
        .json({ message: "Unauthroized" });
    }
  };

  module.exports = isMartket