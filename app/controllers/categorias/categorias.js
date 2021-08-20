const categorias = require('../models/categorias');

async function getcategorias(){

    let data = await categorias.find({});

    return data;

}

module.exports = {
    getcategorias
}