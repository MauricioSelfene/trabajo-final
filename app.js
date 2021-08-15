console.clear();

require('./app/config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(express.static('public'))

app.use(require('./app/routes/routes'));

mongoose.connect(process.env.Mongo, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(resp => console.log('\x1b[32m%s\x1b[0m', 'Conexion realizada correctamente'))
    .catch(error => console.log('\x1b[31m%s\x1b[0m', `Error en la conexion${error}`));

app.listen(PORT, () => { console.log(`Servidor en ejecucion en el puerto ${PORT}`) });