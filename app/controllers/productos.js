const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productos = new Schema({

    idProducto: {
        type: String,
        required:[true, 'El id del producto es obligatorio'],
        unique: true
    },
    nombre: {
        type: String,
    },
    precio: {
        type: String,
    },
    idCategoria: {
        type: String,
    },
    estado: {
        type: String,
    },
    imagen: {
        type: String,    
    },
    descripcion: {
        type: String,    
    },
    creacion: {
        type: Date,  
        default: Date.now  
    },
    modificacion: {
        type: String,    
    },

},{
    timestamps: true,
    versionKey: true,
})

module.exports = mongoose.model('producto', productoSchema);