import db from '../config/db.js';

export const getLibros = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM libros');
    return rows;
  } catch (error) {
    console.error('🔴 Error al obtener libros:', error);
    throw error;
  }
};
