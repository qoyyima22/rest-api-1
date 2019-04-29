const router = require('express').Router()
const Controller = require('../controllers/todos')
const authorization = require('../middleware/authorization')
const authentication = require('../middleware/authentication')

router.use(authentication)
router.get('/', Controller.showAll)

router.get('/:id', authorization, Controller.showOne)

router.post('/', Controller.add)

router.delete('/:id', authorization, Controller.delete)

router.put('/:id', authorization, Controller.update)

router.patch('/:id', authorization, Controller.updateOne)


module.exports = router