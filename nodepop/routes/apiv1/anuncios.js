'use strict'

var express = require('express');
var router = express.Router();

const Anuncio = require('../../models/Anuncio.js');

/* GET /apiv1/anuncios  */
router.get('/', async function(req, res, next) {
    return res.status(200).json({result: 'OK'})
});


router.get('/tags', async function(req, res, next){
    try {
        const tagsV = await Anuncio.allowedTags();
        return res.status(200).json({result: tagsV})
        
    } catch (error) {
        return res.status(404).json({error: 'not found Tags'})
    }

  });

router.get('/tagsValidate', async function(req, res, next){
try {
    const valorTags = req.body.tags
    const tagsErr = await Anuncio.allowedTagsEnumValidate(valorTags);
    if (tagsErr.length > 0){
        return res.status(404).json({error: `Tags ${tagsErr} no encontrados `})
    }else{
        return res.status(200).json({result: `OK`})
    }

} catch (error) {
    return res.status(404).json({error: 'Error en Tags'})
}

});




module.exports = router;