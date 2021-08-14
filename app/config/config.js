const dotenv = require('dotenv');
const resultado = dotenv.config();

if (typeof process.env.AMBIENTE == 'undefined') {
    console.log('Falta definir el ambiente de ejecucion.');
    return;
}

if (process.env.AMBIENTE && process.env.AMBIENTE.trim() == 'pro') {
    console.log('\x1b[32m%s\x1b[0m', 'Entorno de Produccion');
    process.env.Mongo = 'mongodb://localhost:27017/dbpaises';
} else {
    console.log('\x1b[36m%s\x1b[0m', 'Entorno de Desarrollo');
    process.env.Mongo = 'mongodb://localhost:27017/dbpaisesdev';
}