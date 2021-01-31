'use strict';
const mongoose = require('mongoose');
//const fs = require('fs');

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

/*
 * lista de tags permitidos
 */
anuncioSchema.statics.allowedTags = function () {
  return Object.values(tags);
};

anuncioSchema.statics.allowedTagsEnumValidate = function(arrTag){
  return validateTags(arrTag)
};

anuncioSchema.statics.lista = function(filtro,limit,skip,fields,sort){
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
          result.push(arrTag[name])
      }
  }
  return result
}

// Creamos el modelo con el esquema definido
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;

