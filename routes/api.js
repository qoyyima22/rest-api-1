const router = require('express').Router()
const users = require('../routes/users')
const Controller = require('../controllers/users')

router.use('/users',users)

router.post('/signup', Controller.signup)

router.post('/signin', Controller.signin)

module.exports = router