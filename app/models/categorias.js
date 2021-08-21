const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriasSchema = new Schema({
    
    idCategoria:	{ type: String, unique: true },
	nombre:{ type: String },
	estado:{ type: String, default: true },
	

}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('categorias', categoriasSchema, 'categorias')