// tests/resena.test.js
import request from 'supertest';
import app from '../app.js';

describe('Rutas de Reseñas ✍️', () => {
  test('GET /resenas debe devolver las reseñas existentes', async () => {
    const res = await request(app).get('/resenas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('POST /resenas con contenido vacío debe fallar', async () => {
    const res = await request(app).post('/resenas').send({
      libroId: 2,
      usuarioId: 3,
      comentario: ''
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.errores).toBeDefined();
  });

  test('POST /resenas con datos válidos debe crear una reseña', async () => {
  const res = await request(app).post('/resenas').send({
    libroId: 2,
    usuarioId: 3,
    comentario: 'Una lectura muy reveladora sobre el testing.',
    calificacion: 5 // ← este campo faltaba
  });
  expect(res.statusCode).toBe(201);
  expect(res.body.data).toHaveProperty('id');
});

  });
