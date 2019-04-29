const {
    User
} = require('../models')
const tokenHelper = require('../helpers/tokenHelper')

module.exports = function (req, res, next) {
    try {
        let token = req.headers.token
        if (token) {
            let decoded = tokenHelper.verifyToken(token)
            User.findOne({
                    where: {
                        id: decoded.id
                    }
                })
                .then(result => {
                    if (result) {
                        req.authenticatedUser = result
                        req.authenticatedUserId = result.id
                        next()
                    } else {
                        throw new Error('silakan login terlebih dahulu!')
                    }
                })
        } else {
            throw new Error('silakan login terlebih dahulu!')
        }
    } catch (err) {
        res.status(401).send(`${err}`)
    }
}