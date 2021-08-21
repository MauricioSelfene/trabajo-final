const usuarios = require("../models/usuarios");
const categorias = require("../models/categorias");
const productoM = require("../models/productos");

const existeUsuario = async(usuario) => {
    const userDB = await usuarios.findOne({ usuario });

    if (userDB)
        throw new Error(`El usuario ${usuario} ya existe`);
};

const existeCategoria = async (idCategoria) => {
  const idDB = await categorias.findOne({ idCategoria });

  if (idDB) throw new Error(`El id:  ${idCategoria} ya existe`);
  
};

const existeProducto = async(idProducto) => {
    const userDB = await productoM.findOne({ idProducto });

    if (userDB) throw new Error(`El usuario ${producto} ya existe`);
    else throw new Error(`El producto ${producto} no existe`);
};


module.exports = {
    existeUsuario,
    existeProducto,
};