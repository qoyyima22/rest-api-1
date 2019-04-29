const {Todo} = require('../models')

module.exports = function (req, res, next) {
    let userId = req.authenticatedUserId
    let todoId = req.params.id
    Todo.findOne({where: {id: todoId}})
    .then(result => {
        if(result.user_id == userId){
            next()
        } else {
            res.status(401).json('Anda tidak terauthorisasi!')
        }
    })
    .catch(err => {
        res.status(401).json('Anda tidak terauthorisasi!')
    })
}