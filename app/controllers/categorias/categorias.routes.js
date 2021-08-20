const express = require('express');
const app = express();
const {getcategorias} = require('./categorias')


async function getcategorias(req,res){
 try{
     let respuesta = await getcategorias();
     res.send(respuesta);

 }catch(e){
     res.send("Error en la busqueda de categorias")
 

 }
}

app.get("/api/categorias",getcategorias)

module.exports = app;