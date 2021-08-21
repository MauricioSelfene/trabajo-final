const Productos = require("../../models/productos");

async function GetProductos() {
  return await Productos.find({});
}

async function GetProducto(id) {
    return await Productos.findOne({ idProducto: id });
}

async function NewProductos(dProductos) {
  const {
    idProducto,
    nombre,
    precio,
    idCategoria,
    estado,
    imagen,
    descripcion,
    creacion,
    modificacion,
  } = dProductos;
  return await Productos.create({
    idProducto,
    nombre,
    precio,
    idCategoria,
    estado,
    imagen,
    descripcion,
    creacion,
    modificacion,
  });
}


async function UpdateProductos(id, body) {
    if (!id) {
      return { error: true, msg: "Campo producto es requerido" };
    }
    return await Productos.updateOne({ idProducto: id }, { $set: body });
  }

module.exports = {
  GetProductos,
  GetProducto,
  NewProductos,
  UpdateProductos,
};

/*
	idProducto
	nombre
	precio
	idCategoria
	estado
	imagen Middleware de validacion http
	descripcion
	creacion 
	modificacion
*/
