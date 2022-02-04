const userModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  try {
    const saltRound = 10
    const hash = bcrypt.hashSync(req.body.password, saltRound)
    req.body.password = hash

    const user = await userModel.create(req.body)

    const token = jwt.sign({ email: user.email }, 'EnUnLugarDeLaMancha', { expiresIn: '1m' })

    res.status(200).json({ token })

  } catch (error) {
    console.log(error)
    res.status(500).send('Error creating user')
  }
}

module.exports = {
  signup
}
