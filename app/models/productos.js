const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({

    idProducto: {
        type: Number,
        required:[true, 'El id del producto es obligatorio'],
        unique: true
    },
    nombre: {
        type: String,
    },
    precio: {
        type: Number,
    },
    idCategoria: {
        type: Number,
    },
    estado: {
        type: Boolean,
    },
    imagen: {
        type: String,    
    },
    descripcion: {
        type: String,    
    },

},{
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model('producto', productoSchema, 'producto');