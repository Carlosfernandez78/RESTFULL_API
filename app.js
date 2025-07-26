// 1. Importar Express
import express from 'express';

// 2. Inicializar la app
const app = express();

// 3. Crear una ruta GET para la raíz
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 👌');
});

/* 4. Configurar el puerto y escuchar
app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});*/

app.use(express.json());



app.use(express.json());

// Usuarios
app.get('/usuarios', (req, res) => res.send('Obtener todos los usuarios'));
app.get('/usuarios/:id', (req, res) => res.send('Obtener un  usuario por id_usuario'));
app.post('/usuarios', (req, res) => res.status(201).send('Crear un nuevo usuario'));
app.put('/usuarios/:id', (req, res) => res.send('Actualizar los datos de un usuario'));
app.delete('/usuarios/:id', (req, res) => res.send('Eliminar un usuario'));

// Libros
app.get('/libros', (req, res) => res.send('Obtener todos los libros'));
app.get('/libros/:id', (req, res) => res.send('Obtener un libro por su id_libro.'));
app.post('/libros', (req, res) => res.status(201).send('Crear ub nuevo libro'));
app.put('/libros/:id', (req, res) => res.send('Actualizar datos de un libro'));
app.put('/libros/:id/existencia', (req, res) => res.send('Actualizar existencia de un libro'));
app.delete('/libros/:id', (req, res) => res.send('Eliminar un libro'));

// Préstamos
app.get('/prestamos', (req, res) => res.send('Obtener todos los préstamos'));
app.get('/prestamos/:id', (req, res) => res.send('Obtener préstamo por id_prestamos'));
app.post('/prestamos', (req, res) => res.status(201).send('Crear un nuevo préstamo'));
app.put('/prestamos/:id', (req, res) => res.send('Actualizar datos del préstamo'));
app.delete('/prestamos/:id', (req, res) => res.send('Eliminar un préstamo'));

// Reseñas
app.get('/resenias', (req, res) => res.send('Obtener todas las reseñas'));
app.get('/resenias/:id', (req, res) => res.send('Obtener reseña por id_resenias'));
app.get('/resenias/libro/:id_libro', (req, res) => res.send('Obtener una reseña por libro'));
app.post('/resenias', (req, res) => res.status(201).send('Crear una nueva reseña'));
app.put('/resenias/:id', (req, res) => res.send('Actualizar una reseña'));
app.delete('/resenias/:id', (req, res) => res.send('Eliminar una reseña'));

// Lógicas específicas
app.get('/libros/disponibles', (req, res) => res.send('Libros disponibles para préstamo'));
app.get('/prestamos/usuario/:id_usuario', (req, res) => res.send('Préstamos del usuario'));
app.get('/prestamos/libro/:id_libro', (req, res) => res.send('Préstamos por libro'));

// Activar servidor
app.listen(8080, () => {
  console.log('Servidor escuchando en http://localhost:8080');
});
