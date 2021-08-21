const express = require("express");
const { check } = require("express-validator");
const app = express();
const { validaJWTAdm } = require("../../middleware/validaJWT");
const { existeProducto } = require("../../helpers/validacionesDB.js");
const { validacionesCampos } = require("../../middleware/validaciones.js");
const { GetProductos, NewProductos, GetProducto, UpdateProductos } = require("./productos");

// GET
async function getProductos(req, res) {
    try {
        const resp = await GetProductos();
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

async function getProducto(req, res) {
    try {
        const resp = await GetProducto(req.params.idProductos);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}


// POST
async function newProductos(req, res) {
    try {
        const resp = await NewProductos(req.body);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}

async function updateProducto(req, res) {
    try {
        const resp = await UpdateProductos(req.params.idProductos, req.body);
        res.send(resp);
    } catch (error) {
        res.status(500).send(`Error detectado${error}`);
    }
}


//app.get("/api/prodcutos/:idProductos", [validaJWTAdm], getProducto);
app.get("/api/productos/:idProductos", getProducto);

// Login
app.get("/api/productos", getProductos);


app.post("/api/productos", [
        validaJWTAdm,
        check("idProducto", "El id del producto es requerido.").not().isEmpty(),
        check("idProducto").custom(existeProducto),
        check("precio", "El precio es requerido.").not().isEmpty(),
        check("idCategoria", "La categoria es requerida.").isEmpty(),
        check("estado", "El estado es requerido.").not().isEmpty(),
        check("imagen", "La imagen es requerida").not().isEmpty(),
        check("descripcion", "La descripcion es requerida").not().isEmpty(),
        validacionesCampos,
    ],
    newProductos);


app.post("/api/productos/:idProductos", [
        validaJWTAdm,
        check("idProducto", "El id del producto es requerido.").not().isEmpty(),
        check("idProducto").custom(existeProducto),
        check("precio", "El precio es requerido.").not().isEmpty(),
        check("idCategoria", "La categoria es requerida.").isEmpty(),
        check("estado", "El estado es requerido.").not().isEmpty(),
        check("imagen", "La imagen es requerida").not().isEmpty(),
        check("descripcion", "La descripcion es requerida").not().isEmpty(),
        validacionesCampos,
    ],
    updateProducto);

module.exports = app;