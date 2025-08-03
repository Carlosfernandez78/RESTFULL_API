// tests/libro.test.js
import request from 'supertest';
import app from '../app.js';

describe('Rutas de Libros 📚', () => {
  test('GET /libros debe devolver una lista de libros', async () => {
    const res = await request(app).get('/libros');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('POST /libros con datos inválidos debe devolver error', async () => {
    const res = await request(app).post('/libros').send({ titulo: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.errores).toBeDefined();
  });

  test('POST /libros con datos válidos debe crear un libro', async () => {
    const nuevoLibro = {
      titulo: 'El arte de testear',
      autor: 'Copilot',
      anio: 2025
    };
    const res = await request(app).post('/libros').send(nuevoLibro);
    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty('id');
  });
});
