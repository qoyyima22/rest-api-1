const router = require('express').Router()
const Controller = require('../controllers/users')
const authorization = require('../middleware/authorization')
const authentication = require('../middleware/authentication')
const authorizationAdminAuthen = require('../middleware/authorizationAdminAuthen')


router.get('/', authentication,authorization,Controller.showAll)

router.get('/:id', authentication,authorizationAdminAuthen,Controller.showOne)

router.post('/', authentication, authorization, Controller.add)

router.delete('/:id', authentication, authorization, Controller.delete)

router.put('/:id', authentication, authorizationAdminAuthen, Controller.update)


module.exports = router
