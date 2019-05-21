const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
    const token = req.cookies['x-access-token'];
    jwt.verify(token, req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.status(401).send({ status: 401, message: err.message, data: null });
        } else {
            console.log(`User with id ${decoded.id} passed validation`);
            next();
        }
    });
};

module.exports = {
    validateUser,
};
