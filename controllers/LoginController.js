const {
    v4: uuidV4
} = require('uuid');

exports.index = (req, res, next) => {
    res.render('index');
}

exports.login = (eeq, res, next) => {
    res.redirect(`/rooms/${uuidV4()}`)
}