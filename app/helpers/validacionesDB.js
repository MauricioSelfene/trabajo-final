const usuarios = require("../models/usuarios");
const categorias = require("../models/categorias");

const existeUsuario = async (usuario) => {
  const userDB = await usuarios.findOne({ usuario });

  if (userDB) throw new Error(`El usuario ${usuario} ya existe`);
  else throw new Error(`El usuario ${usuario} no existe`);
};

const existeCategoria = async (idCategoria) => {
  const idDB = await categorias.findOne({ idCategoria });

  if (idDB) throw new Error(`El id:  ${idCategoria} ya existe`);
  
};

module.exports = {
  existeUsuario,
};
