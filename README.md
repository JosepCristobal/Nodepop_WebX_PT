# Nodepop_WebX_PT

Inicio de la práctica de Desarrollo backend NodeJs MongoDB

- Creación del fichero .gitignore
- Creamos proyecto con npx express-generator nodepop
- Ejecutamos npm install para cargar las dependencias.
- Hacemos un commit inicial de proyecto y un push.
- Instalamos nodemon en nuestro proyecto local para arrancar en modo desarrollo
- npm i nodemon
- Instalamos cross-env para compatibilidad con variables de entorno en diferentes S.O.
- npm i cross-env
- Añadimos "dev": "cross-env PORT=3000 NODE_ENV=development DEBUG=nodepop:* nodemon" en Scripts de package.json.
- Para arrancar el servidor, lo haremos con el comando npm run dev.
- Para más comodidad, hemos instalado nodemon que nos permite tener el servidor arrancado permanentemente, reiniciándose cada vez que modificamos algo en nuestra aplicación y guardamos.
- Arrancando con nodemon : nodemon run dev.
- Instalamos ESLint para mejorar nuestra calidad de código. Esta herramienta no ayudará a esta labor../node_module
- Inicializamos eslint con el comando $./node_modules/.bin/eslint --init
- Información extraida de "https://lenguajejs.com/javascript/caracteristicas/eslint/"
- Instalamos la guia de estilo standard con  npm i standard
- Iniciamos eslint para nuestro proyecto.
- Si queremos verificar un fichero solamente, podemos ejecutar npx eslint ./routes/index.js
- Vamos a estructurar un poco nuestro proyecto creando diferentes directorios.
- Dentro de routes, creamos un directorio con el el nombre de apiv1 para definir nuestros paths. lib para librerías. models para nuestros modelos.
- Instalamos accesos a MongoDB npm install mongodb.
- Instalamos Mongoose npm install mongoose. Esta librería nos ayudará a operar con la BBDD MongoDB.
- Configuramos nuestro app.js Para errores, rutas, cargas iniciales, etc.
- Tratamos la devolución de errores en el app.js. Si el error se ha producido en una petición al API, el retorno será en formato Json.
- Instalamos express-validator para ayudarnos a la validación de datos que hayamos recibido en nuestras peticiones al API. npm install express-validator.
- Creamos un fichero header.html para incluirlo en nuestro index.html
- Para arrancar la BBDD de MongoDB de forma manual, nos situamos en el directorio donde se encuentra nuestro motor de BBDD y ejecutamos el siguiente comando: ./bin/mongod --dbpath ./data/db
- Creamos la definición y validación de los tags de anuncios. Hemos optado por un objeto tipo enum congelado y hacemos la validación devolviendo los tags erroneos.
- Empezamos a crear el método PUT para dar de alta un nuevo anuncio. Pruebas realizadas sin validación.
- Ahora toca programar toda la validación del anuncio para insertarlo con los parámetros correctos.
- Para consumir apis de terceros, utilizaremos la libreria axios npm install axios.
- La llamaremos desde nuestro index.js principal para servir datos a nuestra página html de presentación inicial.
- Empezamos a mostrar todos los tags dados de alta en nuestro modelo Anuncio.
- Construimos la estructura para hacer consultas por diferentes criterios (contenido).
- Aplicamos filtros por rango de precios, venta o compra




