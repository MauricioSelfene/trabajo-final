const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    usuario: { type: String, unique: true },
    clave: { type: String },
    estado: { type: String, default: true },
    rol: { type: String, emun: ['PUBLIC', 'ADMIN'] }
}, {
    timestamps: true,
    versionKey: false
});

// Quita atributo "clave" en el retorno de la data
usuariosSchema.methods.toJSON = function() {
    const { clave, ...usuario } = this.toObject();
    return usuario;
}

module.exports = mongoose.model('usuarios', usuariosSchema, 'usuarios')