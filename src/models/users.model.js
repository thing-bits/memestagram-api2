const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'This email has already been registered']
  },
  password: {
    type: String,
    required: true,
  }
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel


