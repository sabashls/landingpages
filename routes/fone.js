
exports.login = function (req, res) {
    res.sendfile('views/advtisersite.html');
}
exports.user = function (req, res) {
    res.sendfile('views/user.html');
}

exports.terms = function (req, res) {
    res.sendfile('views/terms&conditions.html');
}

exports.carrier = function (req, res) {
    res.sendfile('views/careers.html');
}
