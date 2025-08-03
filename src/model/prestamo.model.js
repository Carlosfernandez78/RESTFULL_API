import db from '../config/db.js';

// Obtener todos los préstamos
export const obtenerTodosLosPrestamos = () => {
  return db.query('SELECT * FROM prestamos');
};

// Obtener un préstamo por ID
export const obtenerPrestamoPorId = (id) => {
  return db.query('SELECT * FROM prestamos WHERE id = ?', [id]);
};

// Crear nuevo préstamo
export const crearPrestamo = ({ usuario_id, libro_id, fecha_inicio, fecha_fin }) => {
  return db.query(
    'INSERT INTO prestamos (usuario_id, libro_id, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)',
    [usuario_id, libro_id, fecha_inicio, fecha_fin]
  );
};

// Actualizar préstamo existente
export const actualizarPrestamo = (id, { usuario_id, libro_id, fecha_inicio, fecha_fin }) => {
  return db.query(
    'UPDATE prestamos SET usuario_id = ?, libro_id = ?, fecha_inicio = ?, fecha_fin = ? WHERE id = ?',
    [usuario_id, libro_id, fecha_inicio, fecha_fin, id]
  );
};

// Eliminar préstamo por ID
export const eliminarPrestamo = (id) => {
  return db.query('DELETE FROM prestamos WHERE id = ?', [id]);
};
