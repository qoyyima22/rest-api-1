const jwt = require('jsonwebtoken')

module.exports = {
    generateToken(data) {
        let token = jwt.sign(data, process.env.DB_HASH_SECRET, {
            expiresIn: '6h'
        })
        return token
    },
    verifyToken(token) {
        return jwt.verify(token, process.env.DB_HASH_SECRET)
    }
}