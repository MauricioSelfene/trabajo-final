const { generaJWT } = require("../../helpers/generarToken");
const Usuario = require("../../models/usuarios");

async function GetUsuarios() {
    return await Usuario.find({});
}

async function GetUsuario(idUsuario) {
    return await Usuario.findOne({ usuario: idUsuario });
}

async function NewUsuario(dUsuario) {
    const { usuario, estado, clave, rol } = dUsuario;
    return await Usuario.create({ usuario, estado, clave, rol });
}

async function UpdateUsuario(user, body) {
    if (!user) {
        return { error: true, msg: "Campo usuario es requerido" };
    }
    return await Usuario.updateOne({ usuario: user }, { $set: body });
}

async function DelUsuario(user) {
    return await Usuario.deleteOne({ usuario: user });
}

async function LoginUsuario(req, res) {
    const authorization = req.headers.authorization.split(" ")[1];
    const auth = Buffer.from(authorization, "base64")
        .toString("ascii")
        .split(":");

    const usuario = auth[0];
    const clave = auth[1];

    const result = await Usuario.findOne({ usuario, clave });
    if (!result)
        return res.status(403).json({
            mensaje: "Login incorrecto",
        });

    const access_token = await generaJWT(result.usuario, result.rol);
    return res.status(200).json(access_token);
}

module.exports = {
    GetUsuarios,
    GetUsuario,
    NewUsuario,
    UpdateUsuario,
    LoginUsuario,
    DelUsuario
};