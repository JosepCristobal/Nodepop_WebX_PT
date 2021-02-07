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

[Paso a paso](https://github.com/JosepCristobal/Nodepop_WebX_PT/blob/master/README_pasos.md)


