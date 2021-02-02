'use strict';

// Cargamos el conector a la base de datos y la dejamos a punto de utilizar
require('./connectMongoose')
// cargar el modelo Anuncios
const Anuncio = require('../models/Anuncio');
const fs = require('fs');
const path = require('path'); 
const { exit } = require('process');
const fichAnuncios = path.join('./config', 'anunciosImp.js');

/**
 * Elimina todos los anuncios
 */
 async function borraAnuncio(){  
    try{
        await Anuncio.remove({});
        console.log('success borrar anuncios:', true);
        return;
   }catch (err){
        console.log('error en borrar anuncios:',err);
        return (err);
    } 
}

async function inserta(data){
    try {
        const insertaData = await Anuncio.insertMany(data)
        return insertaData
    } catch (error) {
        return error
    }
    
}

function resultado(fichero) {
try {
    const dataFile = fs.readFileSync(fichero, 'utf8')
    return dataFile
  } catch (error) {
    console.error(error)
    return error;
  }
}

async function loadAnuncios(){
    //console.log('Antes de borrar')
    await borraAnuncio();
    //console.log('Después de borrar')
    //console.log('Antes de parsear')
    let data = JSON.parse(resultado(fichAnuncios));
    //console.log('Después de parsear')
    await inserta(data.anuncios);
    console.log('Fin de proceso')
    exit()
}

//Ejecutamos la funciones de borrado y carga 

loadAnuncios();


