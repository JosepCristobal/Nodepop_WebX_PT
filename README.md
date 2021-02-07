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






## Funcionalidades y uso 


