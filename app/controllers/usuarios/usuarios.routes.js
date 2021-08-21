const express = require("express");
const { check } = require("express-validator");
const app = express();
const { validaJWTAdm } = require("../../middleware/validaJWT");
const { validacionesCampos } = require("../../middleware/validaciones.js");
const { existeUsuario } = require("../../helpers/validacionesDB.js");

const {
    GetUsuarios,
    GetUsuario,
    NewUsuario,
    UpdateUsuario,
    LoginUsuario,
    DelUsuario
} = require("./usuarios");

// GET
async function getUsuarios(req, res) {
    try {
        const resp = await GetUsuarios();
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

async function getUsuario(req, res) {
    try {
        const resp = await GetUsuario(req.params.id);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

// POST
async function newUsuario(req, res) {
    try {
        const resp = await NewUsuario(req.body);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}
async function updateUsuario(req, res) {
    try {
        const resp = await UpdateUsuario(req.params.user, req.body);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

// DEL
async function delUsuario(req, res) {
    try {
        const resp = await DelUsuario(req.params.user);
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

app.get("/api/usuarios", [validaJWTAdm], getUsuarios);
app.get("/api/usuarios/:id", [validaJWTAdm], getUsuario);

app.post(
    "/api/usuarios", [
        validaJWTAdm,
        check("usuario", "El usuario es requerido.").not().isEmpty(),
        check("usuario").custom(existeUsuario),
        check("email", "El email es requerido.").not().isEmpty(),
        check("email", "El email no es valido.").isEmail(),
        check("clave", "La clave es requerida.").not().isEmpty(),
        check("rol", "El Rol es requerido [ADMIN, PUBLIC].").not().isEmpty(),
        validacionesCampos,
    ],
    newUsuario
);
app.post(
    "/api/usuarios/:user", [
        validaJWTAdm,
        // check("usuario").custom(existeUsuario),
        check("email", "El email es requerido.").not().isEmpty(),
        check("email", "El email no es valido.").isEmail(),
        check("clave", "La clave es requerida.").not().isEmpty(),
        check("rol", "El Rol es requerido [ADMIN, PUBLIC].").not().isEmpty(),
        validacionesCampos,
    ],
    updateUsuario
);

app.delete("/api/usuarios/:user", [validaJWTAdm], delUsuario);

// Login
app.post("/api/login", LoginUsuario);

module.exports = app;