const admin = require("firebase-admin");
const client = admin.initializeApp();

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    console.log(token, 'token from auth')
    console.log(req.body, 'req user from auth')
    client
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        console.log(req.body, 'req user from auth')
        console.log(decodedToken, 'decoded token from auth')
        req.user = decodedToken.uid;
        console.log(req.user, 'req user from auth')
        console.log(req.body, 'req user from auth')
        return next();
      })
      .catch(err => {
        console.error("Error while verifying Firebase Id token:", err);
        res.status(403).send("Unauthorized");
      });
  } else {
    res
      .status(401)
      .json({ message: "Log in and provide token to view this content." });
  }
};


