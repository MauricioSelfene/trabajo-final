const express = require("express");
const app = express();

app.use(require('../controllers/productos/productos.routes'));
// app.use(require('../controllers/categorias/categoria.routes'));
app.use(require("../controllers/usuarios/usuarios.routes"));

module.exports = app;