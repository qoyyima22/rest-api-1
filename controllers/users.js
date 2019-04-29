const {
    User
} = require('../models')
require('dotenv').config()
const hashing = require('../helpers/hashing')
const tokenHelp = require('../helpers/tokenHelper')

class Controller {
    static signup(req, res) {
        let username = req.body.username
        let password = hashing.generateHash(req.body.password)
        let role = req.body.role
        User.create({
                username: username,
                password: password,
                role: role
            })
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
    static signin(req, res) {
        console.log('aaaa')
        let username = req.body.username
        User.findOne({
                where: {
                    "username": username
                }
            })
            .then((user) => {
                if (!user) {
                    res.status(400).json('username/password salah!')
                } else {
                    let verified = hashing.compareHash(req.body.password, user.password)
                    if (verified) {
                        let data = {
                            id: user.id,
                            role: user.role,
                            username: user.username
                        }
                        let token = tokenHelp.generateToken(data)
                        res.status(200).json({
                            token,
                            id: user.id
                        })
                    } else {
                        res.status(400).json('username/password salah!')
                    }
                }
            })
    }
}

module.exports = Controller