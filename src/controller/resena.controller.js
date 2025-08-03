let resenas = []; // Simulación de almacenamiento en memoria

export const getResenas = (req, res) => {
  try {
    res.status(200).json({ data: resenas });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reseñas' });
  }
};

export const createResena = (req, res) => {
  const { comentario, calificacion, libroId } = req.body;

  // Validaciones básicas
  const errores = [];
  if (!comentario || comentario.trim() === '') errores.push('El comentario es obligatorio');
  if (!libroId || typeof libroId !== 'number') errores.push('El libroId debe ser un número válido');
  if (typeof calificacion !== 'number' || calificacion < 1 || calificacion > 5)
    errores.push('La calificación debe estar entre 1 y 5');

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  const nuevaResena = {
    id: Date.now(),
    comentario,
    calificacion,
    libroId
  };

  resenas.push(nuevaResena);
  res.status(201).json({ data: nuevaResena });
};
