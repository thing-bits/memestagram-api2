const router = require('express').Router()
const { getProfile } = require('../controllers/profiles.controller')
const checkAuth = require('../utils')

router.get('/', checkAuth, getProfile)

module.exports = router
