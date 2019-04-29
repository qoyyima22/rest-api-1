module.exports = function (req, res, next) {
    if (req.authenticatedUser || req.authenticatedUser.role === 'admin') {
        next()
    } else {
        res.status(403).send(`Anda tidak memiliki akses!`)
    }
}