const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function (req, res, next) {
    try {
        let token = req.header.token
        if (token) {
            let decoded = jwt.verify(token, process.env.DB_HASH_SECRET)
            req.authenticatedUser = decoded
        } else {
            throw new Error('silakan login terlebih dahulu!')
        }
    } catch (err) {
        res.status(401).send(`${err}`)
    }
    next()
}