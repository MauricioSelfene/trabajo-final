const express = require('express');
const app = express();
const { LoginUsuario } = require('./usuarios');

// Login
app.post('/api/login', LoginUsuario);

module.exports = app;