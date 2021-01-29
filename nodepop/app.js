var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//El motor de plantillas es ejs
//Vamos a hacer una modificacion y lo cambiamos a html
//app.set('view engine', 'ejs');
app.set('view engine', 'html');
//Definimos que es un html, el no lo sabe si no se lo indicamos.
app.engine('html', require('ejs').__express);

//Declaramos variable global que será accesible por toda nuestras vistas
app.locals.title = 'NodePopAPI'


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Midelware de ficheros estáticos
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rutas del API
 */
app.use('/api/agentes', require('./routes/api/agentes'));

/**
 * Rutas de mi Website
 */


app.use('/', indexRouter); //Variable indexRouter al inicio de este fichero  
app.use('/users', usersRouter); //Variable usersRouter al inicio de este fichero

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
