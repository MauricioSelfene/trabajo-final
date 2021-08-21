const usuarios = require("../models/usuarios");
const productoM = require("../models/productos");

const existeUsuario = async(usuario) => {
    const userDB = await usuarios.findOne({ usuario });

    if (userDB)
        throw new Error(`El usuario ${usuario} ya existe`);
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