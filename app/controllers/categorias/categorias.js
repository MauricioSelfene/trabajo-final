const Categoria = require("../../models/categorias");

async function GetCategorias() {
    return await Categoria.find({});
}

async function GetCategoria(idCategoria) {
    return await Categoria.findOne({ idCategoria });
}

async function NewCategoria(dataBody) {
    const { idCategoria, nombre, estado } = dataBody;
    return await Categoria.create({ idCategoria, nombre, estado });
}

//revisar
async function UpdateCategoria(idCat, body) {
    if (!idCat) {
        return { error: true, msg: "Parametro idCategoria es requerido" };
    }
    return await Categoria.updateOne({ idCategoria: idCat }, { $set: body });
}

async function DelCategorias(idCat) {
    return await Categoria.deleteOne({ idCategoria: idCat });
}

module.exports = {
    GetCategorias,
    GetCategoria,
    NewCategoria,
    UpdateCategoria,
    DelCategorias
}