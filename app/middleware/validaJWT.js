const jwt = require("jsonwebtoken");

const validaJWTAdmVend = (req, res, next) => {
    // console.log(req.headers.authorization.split('Bearer ')[1]);
    // const token = req.header('x-token');
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        const payload = jwt.verify(token, process.env.SECRETKEY);
        console.log(payload);
        if (payload.rol !== "ADMIN" && payload.rol !== "VENDEDOR")
            return res.status(403).json({
                msg: "Usuario no tiene los privilegios nescesarios",
            });
        else next();
    } catch (error) {
        return res.status(403).json({
            msg: "Token invalido",
        });
    }
};

const validaJWTAdm = (req, res, next) => {
    // console.log(req.headers.authorization.split('Bearer ')[1]);
    // const token = req.header('x-token');
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        const payload = jwt.verify(token, process.env.SECRETKEY);
        console.log(payload);
        if (payload.rol !== "ADMIN")
            return res.status(403).json({
                msg: "Usuario no tiene los privilegios nescesarios",
            });
        else next();
    } catch (error) {
        return res.status(403).json({
            msg: "Token invalido",
        });
    }
};

module.exports = {
    validaJWTAdmVend,
    validaJWTAdm,
};