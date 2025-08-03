import db from '../config/db.js';

export const getResenas = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM resenas');
    return rows;
  } catch (error) {
    console.error('🔴 Error al obtener reseñas:', error);
    throw error;
  }
};
