module.exports = function (req, res, next) {
    if (req.authenticatedUser.role === 'admin') {
        next()
    } else {
        res.status(403).send(`Anda bukan Admin!`)
    }
}