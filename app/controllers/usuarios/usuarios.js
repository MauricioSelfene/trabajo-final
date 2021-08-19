const { generaJWT } = require('../../helpers/generarToken');
const Usuario = require('../../models/usuarios');

async function LoginUsuario(req, res) {

    const authorization = req.headers.authorization.split(' ')[1];
    const auth = Buffer.from(authorization, 'base64').toString('ascii').split(':');

    const usuario = auth[0];
    const clave = auth[1];

    const result = await Usuario.find({ usuario, clave });
    if (!result)
        return res.status(403).json({
            mensaje: 'Login incorrecto'
        });

    const access_token = await generaJWT(result.usuario);
    return res.status(200).json(access_token);
}

module.exports = {
    LoginUsuario
}