# ZARA Challenge

## 🎯 Descripción 
Esta prueba consiste en la creación de una pequeña aplicación para obtener información sobre diferentes personajes de Marvel.

## 👨‍💻 Requisitos
**Pantalla principal:** Debe mostrar la lista de los primeros 50 personajes de Marvel, permitir realizar búsquedas por nombre (gestionado por API) y agregar personajes a favoritos.

**Pantalla de favoritos:** Debe mostrar la lista de personajes que el usuario ha agregado a favoritos y permitir la búsqueda por nombre.

**Pantalla de detalles del personaje:** Debe mostrar toda la información sobre el personaje y la lista de cómics en los que aparece y permitir agregar el personaje a favoritos.

También debe tener un encabezado que permita navegar a la pantalla principal y a la pantalla de favoritos, así como mostrar un contador de los caracteres guardados en favoritos.

Además, se requiere implementar pruebas para comprobar el correcto comportamiento de la aplicación, tener un diseño responsive y tener una correcta accesibilidad.


## 📝 Instrucciones para ejecutar la aplicación
Para ejecutar la aplicación, sigue los siguientes pasos:

- Clona este repositorio en tu máquina local.
- Asegúrate de tener instalado Node.js en tu sistema.
- Abre una terminal y navega hasta la carpeta raíz del proyecto.
- Ejecuta el siguiente comando para instalar las dependencias del proyecto:
```bash
  npm install
```
- Una vez finalizada la instalación, ejecuta el siguiente comando para iniciar la aplicación:
```bash
  npm run dev
```
- Abre tu navegador web y visita la siguiente URL: `http://localhost:5173`.
- Ahora podrás ver la aplicación en funcionamiento


## 🖥️ Arquitectura de la aplicación
En la carpeta **components** están los componentes que se utilizan en la web, como el navbar, la lista de personajes, la lista de favoritos, el detalle de un personaje, etc.

En la carpeta **pages** están las páginas de la aplicación, como la página del listado de personajes, la página de favoritos y la página de detalles de un personaje.

Las rutas se manejan en la carpeta **routes**, donde tenemos la ruta principal y sus hijos para cada página.

Para el contexto de la aplicación usamos la **context-api** de react y en la carpeta store tenemos el contexto para manejar los personajes favoritos seleccionados por el usuario.

Tenemos una carpeta **theme** donde están definidos los estilos globales de la aplicación como los espacios, tipografías, media queries, colores, etc.

Para manejar las llamadas a la api usamos el **request** que se encuentra en la carpeta **axios**. En el .env hay que poner las keys para poder ejecutar las llamadas a la api.

Por último tenemo las carpetas **tests** y **types**. En la primera están definidos los tests para los componentes que más interacción tienen con el usuario y en la segunda tipos globales enfocados al uso de la api.


### 📚 Dependencias
- [**axios**](https://www.npmjs.com/package/axios): Para realizar las llamadas a la API de Marvel.
- [**crypto-js**](https://www.npmjs.com/package/crypto-js): Para generar el hash necesario para realizar las llamadas a la API de Marvel.
- [**react-router-dom**](https://www.npmjs.com/package/react-router-dom): Para manejar las rutas de la aplicación.
- [**vitest**](https://www.npmjs.com/package/vitest): Para realizar las pruebas de los componentes.
