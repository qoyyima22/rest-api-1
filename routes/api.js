const router = require('express').Router()
const Controller = require('../controllers/users')
const todo = require('./todo')

router.post('/signup', Controller.signup)

router.post('/signin', Controller.signin)

router.use('/todos', todo)

module.exports = router