const usuarios = require("../models/usuarios");
const producto = require("../models/producto");

const existeUsuario = async (usuario) => {
  const userDB = await usuarios.findOne({ usuario });

  if (userDB) throw new Error(`El usuario ${usuario} ya existe`);
  else throw new Error(`El usuario ${usuario} no existe`);
};

const existeProducto = async (producto) => {
  const userDB = await producto.findOne({ producto });

  if (userDB) throw new Error(`El usuario ${producto} ya existe`);
  else throw new Error(`El producto ${producto} no existe`);
};


module.exports = {
  existeUsuario,
  existeProducto,
};
