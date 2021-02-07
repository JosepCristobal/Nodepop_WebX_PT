# Práctica WEB-API/Node.js/MongoDB

## Objetivo
Desarrollar una API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop. Esta API podrá ser utilizada y consumida por desarrolladores web, IOS, Android, etc.

El servicio mantiene anuncios de compra o venta de artículos y deberá permitir diferentes tipos de búsqueda, por cosiguiente la API a desarrollar deberá proveer los métodos necesarios para tal funcionalidad.

## Consideraciones generales
1. Cada anuncio deberá tener los siguientes datos:
	* Nombre del artículo. Un anuncio siempre tendrá un solo artículo.
	* Si el artículo se vende o se busca.
	* Precio. Será el precio del artículo en caso de ser una oferta de venta. En caso de que sea un anuncio de "se busca", será el precio que el solicitante estaría dispuesto a pagar.
	* Foto del artículo. Cada artículo tendrá solo una foto.
	* Tags del anuncio. Podrá contener uno o varios de estos cuartro: work,lifestyle, motor y mobile.

2. Operaciones que deberá tener la API a crear.
	* La lista de anuncios debe tener la posibilidad de paginación.
	* La posibilidad de filtrar por tag.
	* Poder filtrar por tipo de anuncio, venta o búsqueda.
	* Posibilidad de filtro por rango de precio, mínimo y máximo.
	* Filtrado por nombre de artículo, con la posibilidad de filtrar que empiece con el dato buscado.
	* Lista de tags existentes.
	* Creación de un anuncio.

3. Los sistemas donde se desplegará la API utilizarán MongoDB como base de datos.
4. El site donde se despliegue deberá tener, ademá de la API, una página frontend que muestre una lista de anuncios con filtros en su página principal. Obtendrá información de la base de datos usando los modelos y la mostrará.

## Desarrollo del proyecto
En el siguiente enlace, describimos paso a paso todo el recorrido que hemos seguido en el desarrollo de nuestro proyecto:

[Paso a paso](https://github.com/JosepCristobal/Nodepop_WebX_PT/blob/master/README_pasos.md)

En todo nuestro código hemos incluido comentarios para poder hacer un seguimiento y clarificar que hace cada una de nuestras funcionalidades (funciones, clases, midelwares, rutas, etc.).

Hemos intendado dejar un código limpio y claro, estructurandolo de la forma más adecuada y siguiendo los criterios aprendidos en este módulo.

Los componentes a destacar utilizados en nuestro proyecto son:

* Visual Studio Code v1.53.0 como entorno de desarrollo.
* Node.js v14.15.1 como motor de nuestro servidor de aplicaciones.
* Express v4.16.1 como Framework web para nuestro proyecto en node.js.
* MongoDB v4.4.3 como motor de base de datos.
* Nuestro proyecto ha sido desarrollado en un Macbook con MacOS Catalina v10.15.7

## Puesta en marcha de nuestro proyecto
Para la puesta en marcha de nuestro proyecto/API, deberemos seguir los siguientes pasos:

* Lo primero de todo es disponer de las herramientas necesarias en nuestro ordenador para poder abrir el proyecto y ejecutarlo.
	* Disponer de un entorno de desarrollo. Recomendamos Visual Studio Code.
	* Instalar Node.js. La version de Node utilizada en nuestro proyecto ha sido la v14.15.1
	* Instalar MongoDB o tener acceso a él desde nuestro ordenador. Podriamos trabajar también  con un Mongo en el Cloud.

* En segundo lugar clonaremos el proyecto original en una carpeta local de nuestro Mac, PC Windows o Linux. [Este es el enlace](https://github.com/JosepCristobal/Nodepop_WebX_PT.git)
* Una vez lo tengamos en nuestra carpeta, abriremos una ventana de comandos y nos situaremos en la carpeta de nuestro proyecto (./nodepop).
* Situados en el driectorio nodepop, ejecutaremos el comando "npm install"

		jcm@MacBook-Pro-de-Josep nodepop % npm install
		audited 419 packages in 2.057s

		59 packages are looking for funding
  		run `npm fund` for details

		found 0 vulnerabilities
* Con ello conseguiremos instalar todas las dependencias necesarias para que nuestro proyecto funcione.
* Ahora deberíamos verificar que tenemos la BBDD MongoDB levantada y accesible desde nuestro ordenador. Si la tenemos en local, posiblemente la tengamos que levantar de forma manual.
* Si fuera el caso, deberíamos abrir una ventana de comandos o terminal nuevo y situarnos en el directorio donde se encuentra nuestra BBDD. Si es la primera vez que accedemos a nuestra BBDDD, es recomendable crear una carpeta para almacenar nuestros datos. En nuestro caso hemos creado a partir de la carpeta principal de Mongo, una subcarpeta llamada data y dentro de ella otra llamada db, quedando el directorio estructurado así:

		/mongodb-macos-x86_64-4.4.3/data/db
		
* A continuación, debemos arrancar nuestra BBDD y situados dentro de la carpeta principal de mongo, lo haremos con el siguiente comando:

		./bin/mongod --dbpath ./data/db
		
* Una vez arrancado nuestro MongoDB, deberemos ir a nuestro proyecto y cambiar un par de valores de nuestras variables de configuración.

	* Deberemos editar ./local_config.js
	
				module.exports = {
	    			anuncios: {
	      			imagesURLBasePath: 'http://192.168.10.114:3000/images/anuncios/',
	      			baseUrlPath: 'http://192.168.10.114:3000/'
	    			}
  				};
  				
		* imagesURLBasePath: pertenece a la ruta donde vamos a almacenar las imágenes de nuestro anuncios. En este caso, solo cambiaríamos 'http://192.168.10.114:3000' para adaptarla a la ruta de nuestro local o servidor.
		* baseUrlPath: Es la ruta base de nuestro servicio. Haríamos el cambio al igual que hemos hecho en el punto anterior.
	* A continuación editaremos ./lib/connectMongoose.js que es donde tenemos la cadena de conexión a nuestra BBDD MongoDB. Si trabajamos en local, este paso no sería necesario.

			mongoose.connect('mongodb://localhost/cursonode',{
	    		useNewUrlParser: true,
	    		useUnifiedTopology: true
			});
	* Nuestro servidor dará el servicio a través de puerto 3000, si queremos cambiarlo por algun motivo, lo deberemos hacer en ./bin/www. En nuestro caso no tenemos ninguna variable de entorno declarada referente al puerto, por lo tanto si queremos cambiarlo solo deberemos cambiar el 3000 por el que queramos.

			var port = normalizePort(process.env.PORT || '3000');
			
* Con todos estos pasos, casi tenemos nuestro servicio a punto de arrancar. Para facilitar la puesta marcha inicial, hemos creado un script para inicializar y cargar nuestra BBDD unos anuncios de prueba. Para ejecutarlo deberemos estar en la ventana de comandos, en la raiz de nuestro proyecto nodepop y ejecutaremos el siguiente comando:

		jcm@MacBook-Pro-de-Josep nodepop % node ./lib/install_db.js
		
	* Y si el resultado es el siguiente, es que todo ha salido bien y ya tenemos datos en nuestra base de datos.
	
			Conectado a MongoDB en cursonode
			success borrar anuncios: true
			Fin de proceso
		
* Para entornos de desarrollo y pruebas arrancaremos el servicio utilizando Nodemon ejecutando el siguiente comando.

		jcm@MacBook-Pro-de-Josep nodepop % nodemon run env
		
*  Si todo ha salido como esperábamos, ya tenemos nuestro servicio levantado a punto de ser consumido.
* 






## Funcionalidades y uso 


