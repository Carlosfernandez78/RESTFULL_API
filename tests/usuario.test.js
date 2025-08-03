// tests/usuario.test.js
import request from 'supertest';
import app from '../app.js'; // Asegurate de que app.js exporta la instancia de Express
import db from '../src/config/db.js'; // 👈 Este archivo debe tener tu conexión MySQL

beforeEach(async () => {
  await db.query('DELETE FROM usuarios WHERE email = "test@correo.com"');
});

describe('Rutas de Usuarios 👥', () => {
  test('GET /usuarios debe devolver una lista', async () => {
    const res = await request(app).get('/usuarios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('POST /usuarios con datos inválidos debe fallar', async () => {
    const res = await request(app).post('/usuarios').send({ email: 'sinNombre@ejemplo.com' });
    expect(res.statusCode).toBe(400);
    expect(res.body.errores).toBeDefined();
  });

  test('POST /usuarios con datos válidos debe crear usuario', async () => {
    const res = await request(app).post('/usuarios').send({
      nombre: 'Carlos Tester',
      email: 'test@correo.com'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty('id');
  });
});
