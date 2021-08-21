const express = require('express');
const app = express();
const { check } = require("express-validator");
const { validaJWTAdm } = require("../../middleware/validaJWT");
const { validacionesCampos } = require("../../middleware/validaciones.js");
const { existeCategoria } = require("../../helpers/validacionesDB.js");

const {
    GetCategorias,
    GetCategoria,
    NewCategoria,
    UpdateCategoria,
    DelCategorias
} = require("./categorias");

// GET
async function getCategorias(req, res) {
    try {
        const resp = await GetCategorias();
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

async function getCategoria(req, res) {
    try {
        const resp = await GetCategoria(req.params.id.toString());
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

// POST
async function newCategoria(req, res) {
    try {
        const resp = await NewCategoria(req.body);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

async function updateCategoria(req, res) {
    try {
        const resp = await UpdateCategoria(req.params.idCategoria, req.body);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

// DEL
async function delCategoria(req, res) {
    try {
        const resp = await DelCategorias(req.params.id);
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

app.get("/api/categorias", [validaJWTAdm], getCategorias);
app.get("/api/categoria/:id", [validaJWTAdm], getCategoria);


app.post(
    "/api/categorias", [
        validaJWTAdm,
        check("idCategoria", "El idCategoria es requerido.").not().isEmpty(),
        check("idCategoria").custom(existeCategoria),
        check("estado", "El estado es requerido.").not().isEmpty(),
        validacionesCampos,
    ],
    newCategoria
);

app.post(
    "/api/categorias/:idCategoria", [
        validaJWTAdm,
        check("nombre", "El usuario es requerido.").not().isEmpty(),
        // check("nombre").custom(idDB),
        check("estado", "El estado es requerido.").not().isEmpty(),
        validacionesCampos,
    ],
    updateCategoria
);

app.delete("/api/categoria/:id", [validaJWTAdm], delCategoria);


module.exports = app;