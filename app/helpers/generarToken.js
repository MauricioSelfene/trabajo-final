const jwt = require('jsonwebtoken');

const generaJWT = (usuario) => {
    return new Promise((resolve, reject) => {
        const payload = usuario;
        const expires = 3600;
        jwt.sign({ payload }, process.env.SECRETKEY, { expiresIn: expires }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No fue posible generar el token')
            } else {
                const access = {
                    expires_in: expires,
                    access_token: token
                }
                resolve(access);
            }
        })
    })
}

module.exports = {
    generaJWT
}