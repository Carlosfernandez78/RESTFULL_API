import express from 'express';
import mainRoutes from './routes/mainRoutes.js';

const app = express();
app.use(express.json());
app.use('/', mainRoutes);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
