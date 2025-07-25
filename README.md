# RESTFull_API

Este proyecto forma parte de la consigna de la Semana 16. Consiste en la creación de un servidor básico utilizando Express.js, con modularización inicial para futuras expansiones.

## Objetivos cumplidos

- Instalación de Express con `npm`.
- Configuración del servidor en `index.js`.
- Habilitación del middleware `express.json()` para recibir datos en formato JSON.
- Implementación de una ruta POST `/saludo` que responde con un mensaje personalizado.
- Uso de ESModules con `import` / `export`.
- Estructuración del proyecto en carpetas (`routes`, `controllers`) para favorecer el orden y la escalabilidad.
- Subida del proyecto a GitHub sin incluir `node_modules`.

## Instrucciones para correr el proyecto

1. Clonar el repositorio:
git clone https://github.com/Carlosfernandez78/RESTFULL_API.git

2. Instalar las dependencias:
npm install

3. Ejecutar el servidor:
node index.js

4. Probar el endpoint con Thunder Client, Postman o curl:

- URL:
  ```
  POST http://localhost:3000/saludo
  ```
- Headers:
  ```
  Content-Type: application/json
  ```
- Body:
  ```json
  {
    "nombre": "Carlos"
  }
  ```
- Respuesta esperada:
  ```json
  {
    "mensaje": "¡Hola Carlos, bienvenido a la API!"
  }
  ```

## Estructura del proyecto

RESTFull_API/
* controllers/ mainController.js 
* routes/ mainRoutes.js 
* index.js 
* package.json
* package-lock.json
* .gitignore

## Notas finales

Este servidor sirve como base para construir una API RESTful modularizada. El proyecto puede expandirse en el futuro agregando más rutas, validaciones, controladores y conexión a base de datos.

