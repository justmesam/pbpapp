const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWTKey = process.env.JWTKEY
const expiryTime = '7d'

const generateToken = (username, id) => {
  const token = jwt.sign(
    {username, id},
    JWTKey,
    {
      algorithm: 'HS256',
      expiresIn: expiryTime
    }
  )
  return token
}

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(" ")[1]

    if (token) {
      let userDetails;

      try{
        userDetails = jwt.verify(token, JWTKey)
        if (userDetails.id) {
          res.locals.userId = userDetails.id
          return next()
        }
      } catch (error){
        return res
        .status(401)
        .send({
          error: {
            message: "The User token could not be verified"
          }
        })
      }
    }
  }

  return res
  .status(401)
  .send("User token header missing")
  }



module.exports = {
  generateToken,
  verifyToken
}
