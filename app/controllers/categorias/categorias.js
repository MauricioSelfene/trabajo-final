const Categoria = require("../../models/categorias");

async function GetCategorias() {
    return await categoria.find({});
  }
  
  async function GetCategoria(idCategoria) {
    return await Categoria.findOne({ id: idCategoria });
  }
  
  async function NewCategoria(idCategoria) {
    const { Nombre, estado } = idCategoria;
    return await Categoria.create({ Nombre, estado });
  }

  //revisar
  async function UpdateCategoria(idCat, body) {
    if (!idCat) {
      return { error: true, msg: "Campo Nombre es requerido" };
    }
    return await Usuario.updateOne({ idCategoria: idCat }, { $set: body });
  }

module.exports = {
    GetCategorias,
    GetCategoria,
    NewCategoria,
    UpdateCategoria,
}