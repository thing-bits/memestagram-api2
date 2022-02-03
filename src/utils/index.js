const jwt = require('jsonwebtoken')
const userModel = require('../models/users.model')

const checkAuth = (req, res, next) => {
  if (!req.headers.token) return res.status(500).send('User not logged in')

  jwt.verify(req.headers.token, process.env.SECRET, async (err, decoded) => {
    if (err) return res.status(500).send('Token not valid')
    const user = await userModel.findOne({ email: decoded.email })

    if (!user) return res.status(500).send('Token not valid')
    else {
      res.locals.user = {
        name: user.name,
        username: user.username,
        email: user.email
      }
      next()
    }
  })
}

module.exports = checkAuth
