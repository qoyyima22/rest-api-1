const {
    Todo
} = require('../models')

class Controller {
    static showAll(req, res) {
        Todo.findAll({
                order: [
                    ["id", "ASC"]
                ],
                where: {user_id: req.authenticatedUserId}
            })
            .then((todos) => {
                res.status(200).json(todos)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
    static showOne(req, res) {
        let id = req.params.id
        Todo.findByPk(id)
            .then((todo) => {
                res.status(200).json(todo)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
    static add(req, res) {
        let title = req.body.title
        let description = req.body.description
        let user_id = req.authenticatedUserId
        console.log(typeof user_id)
        Todo.create({
                title,
                description,
                user_id
            })
            .then((todoCreated) => {
                res.status(201).json(todoCreated)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
    static delete(req, res) {
        let id = req.params.id
        Todo.findByPk(id)
            .then((todo) => {
                return todo.destroy()
                    .then((report) => {
                        res.status(201).json(report)
                    })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
    static update(req, res) {
        let id = req.params.id
        let title = req.body.title
        let description = req.body.description
        Todo.findByPk(id)
            .then((todo) => {
                return todo.update({
                        title: title,
                        description: description,
                    })
                    .then((data) => {
                        res.status(201).json(data)
                    })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
    static updateOne(req, res) {
        let id = req.params.id
        let field = req.body.field
        let value = req.body.value
        Todo.findByPk(id)
            .then((todo) => {
                return todo.update({
                        [field]: value,
                    })
                    .then(() => {
                        res.status(201).json()
                    })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}

module.exports = Controller