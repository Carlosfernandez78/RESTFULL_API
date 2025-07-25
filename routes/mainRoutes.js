import { Router } from 'express';
const router = Router();

router.post('/saludo', (req, res) => {
  const { nombre } = req.body;
  res.json({ mensaje: `¡Hola ${nombre}, bienvenido a la API!` });
});

export default router;
