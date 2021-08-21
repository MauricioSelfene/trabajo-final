const express = require("express");
const app = express();

<<<<<<< HEAD
// app.use(require('../controllers/productos/producto.routes'));
app.use(require('../controllers/categorias2/categorias.routes'));
=======
app.use(require('../controllers/productos/productos.routes'));
// app.use(require('../controllers/categorias/categoria.routes'));
>>>>>>> feature-ms
app.use(require("../controllers/usuarios/usuarios.routes"));

module.exports = app;