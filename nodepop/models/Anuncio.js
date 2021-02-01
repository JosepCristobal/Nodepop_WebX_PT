'use strict';
const mongoose = require('mongoose');
const fs = require('fs');

/*
 * lista de tags permitidos
 */
//Simulamos un enum en javascrip utilizando un objeto congelado para que no pueda ser modificado
const tags = { "work":"work", "lifestyle":"lifestyle", "motor":"motor", "mobile":"mobile"};
Object.freeze(tags);

const anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  venta: { type: Boolean, index: true },
  precio: { type: Number, index: true },
  foto: String,
  tags: { type: [String], index: true }
});

// Devolvemos todos los tags definidos
anuncioSchema.statics.allowedTags = function () {
  return Object.values(tags);
};

// Validamos que los tags de un nuevo registro de anuncio, estén dentro de los permitidos.
// si alguno de ellos no coincide, lo devolveremos con la respuesta de error.
anuncioSchema.statics.allowedTagsEnumValidate = function(arrTag){
  return validateTags(arrTag)
};

// Definimos un método estático para consultar los anuncios según los criterios de búsqueda
anuncioSchema.statics.lista = function(data){
  const nombre = data.nombre;
  const venta = data.venta;
  const precio = data.precio;
  const tags = data.tags;
  const limit = parseInt(data.limit);
  const skip = parseInt(data.skip);
  const fields = data.fields;
  const sort = data.sort;

  const filtro = {}
  if (nombre){
    //Usamos una expresion regular para la búsqueda del nombre por contenido como si fuera un like y insensible a las may-min
    filtro.nombre = {$regex: nombre, $options: 'i'};
  }

  //Buscamos por el contenido de los tags de clasificación de producto
  if (tags){
    filtro.tags = {$in: tags};
  }

  //Filtramos si es venta = true o compra = false
  if (venta){
    filtro.venta = venta
  }

  //Vamos a tratar el filtro del precio para buscar el intervalo que nos marque el usuario que consulta
  if (precio){   
      if (precio.indexOf('-') !== -1) {
        filtro.precio = {};
        let rango = precio.split('-');
        if (rango[0] !== '') {
          filtro.precio.$gte = rango[0];
        }
        if (rango[1] !== '') {
          filtro.precio.$lte = rango[1];
        }
      } else {
        filtro.precio = precio;
      }
    
  }

  const query = Anuncio.find(filtro);
  query.limit(limit);
  query.skip(skip);
  query.select(fields)
  query.sort(sort)
  return query.exec();
}

anuncioSchema.statics.newAnuncio = function(anuncioNew){
  const anuncio = new Anuncio(anuncioNew)
  const createAnuncio =  anuncio.save()
  return createAnuncio;
}





// Validamos los tags asignados a nuevos anuncios
let validateTags = (arrTag) => {
  let result = [];
  for (let name in arrTag){
      if (tags.hasOwnProperty(arrTag[name]) === false){
        //Devolvemos los tags que no son reconocidos
          result.push(arrTag[name])
      }
  }
  return result
}

// Creamos el modelo con el esquema definido
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;

