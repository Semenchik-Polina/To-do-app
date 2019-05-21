const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const users = require('../../data/users.json');

const login = (req, res, next) => {
    users.forEach((user) => {
        if (user.username === req.body.username) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ id: user.id }, req.app.get('secretKey'), {
                    expiresIn: '1h',
                });
                console.log(res.cookie);
                res.cookie('x-access-token', token, { httpOnly: true });
                res.status(200).send({
                    status: 'success',
                    message: 'user found!',
                    data: { user },
                });
            } else {
                res.status(403).send({
                    status: 'error',
                    message: 'Invalid email or password.',
                    data: null,
                });
            }
        }
    });
};

const logout = (req, res, next) => {
    res.clearCookie('x-access-token');
    res.status(204).send();
};

module.exports = {
    login,
    logout,
};
