const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriasSchema = new Schema({

    idCategoria: { type: Number, unique: true },
    nombre: { type: String },
    estado: { type: Boolean, default: true },


}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('categorias', categoriasSchema, 'categorias')