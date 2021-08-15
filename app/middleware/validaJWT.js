const jwt = require('jsonwebtoken');

const validaJWT = (req, res, next) => {
    // console.log(req.headers.authorization.split('Bearer ')[1]);
    // const token = req.header('x-token');
    try {
        const token = req.headers.authorization.split('Bearer ')[1];
        const payload = jwt.verify(token, process.env.SECRETKEY);
        console.log(payload);
        next();
    } catch (error) {
        return res.status(403).json({
            msg: 'Token invalido'
        })
    }
}

module.exports = {
    validaJWT
}