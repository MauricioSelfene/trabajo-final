const express = require('express');
const app = express();
const { check } = require("express-validator");
const { validaJWTAdm } = require("../../middleware/validaJWT");
const { validacionesCampos, validaRol } = require("../../middleware/validaciones.js");
const { idDB } = require("../../helpers/validacionesDB.js");

const {
    GetCategorias,
    GetCategoria,
    NewCategoria,
    UpdateCategoria
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
      const resp = await GetCategoria(req.params.id);
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
      const resp = await UpdateCategoria(req.params.Categoria, req.body);
      res.send(resp);
    } catch (error) {
      res.status(500).send(`Error detectado${error}`);
    }
  }

  app.get("/api/categorias", [validaJWTAdm], getCategorias);
app.get("/api/categoria/:id", [validaJWTAdm], getCategoria);

// trae todas las categoria
app.post(
    "/api/categorias",
    [
      validaJWTAdm,
      check("nombre", "El usuario es requerido.").not().isEmpty(),
      check("nombre").custom(idDB),
      check("estado", "El email es requerido.").not().isEmpty(),
      validacionesCampos,
    ],
    newUsuario
  );

  // trae una categoria especifica
  app.post(
    "/api/categorias/:idCat",
    [
        validaJWTAdm,
        check("nombre", "El usuario es requerido.").not().isEmpty(),
        check("nombre").custom(idDB),
        check("estado", "El email es requerido.").not().isEmpty(),
        validacionesCampos,
    ],
    updateUsuario
  );

app.get("/api/categorias",GetCategorias)

module.exports = app;