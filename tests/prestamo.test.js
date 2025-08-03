// tests/prestamo.test.js
import request from 'supertest';
import app from '../app.js';

describe('Rutas de Préstamos 🔄', () => {
  test('GET /prestamos debe devolver la lista de préstamos', async () => {
    const res = await request(app).get('/prestamos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('POST /prestamos con datos inválidos debe fallar', async () => {
    const res = await request(app).post('/prestamos').send({ libroId: null });
    expect(res.statusCode).toBe(400);
    expect(res.body.errores).toBeDefined();
  });

  test('POST /prestamos con datos válidos debe registrar un préstamo', async () => {
    const res = await request(app).post('/prestamos').send({
      libroId: 1,
      usuarioId: 1,
      fechaPrestamo: '2025-08-03'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty('id');
  });
});
