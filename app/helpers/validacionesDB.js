const usuarios = require("../models/usuarios");

const existeUsuario = async (usuario) => {
  const userDB = await usuarios.findOne({ usuario });

  if (userDB) throw new Error(`El usuario ${usuario} ya existe`);
  else throw new Error(`El usuario ${usuario} no existe`);
};

module.exports = {
  existeUsuario,
};
