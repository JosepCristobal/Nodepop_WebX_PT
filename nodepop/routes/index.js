var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', async function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //El title lo tenemos definido como variable local en el app.js
  let str = ''
  if (Object.keys(req.query).length === 0 && req.query.constructor === Object){
    str =''
  }else{
    str = '/?'+Object.entries(req.query).map(([key, val]) => `${key}=${val}`).join('&');
  }
  
  const url = 'http://localhost:3000/apiv1/anuncios'+str
  const urlTags = 'http://localhost:3000/apiv1/anuncios/tags'

  const response = await axios.get(url);

  const responseTags = await axios.get(urlTags)

  let tags = responseTags.data.result.toString().split(',')
  console.log(tags.length, tags)
  res.locals.valorQuery = response.data
  res.locals.valorTags = tags

  res.render('index');
});



module.exports = router;
