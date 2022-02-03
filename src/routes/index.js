const router = require('express').Router()
const authRouter = require('./auth.router')
const profileRouter = require('./profiles.router')

router.use('/auth', authRouter)
router.use('/profile', profileRouter)

module.exports = router
