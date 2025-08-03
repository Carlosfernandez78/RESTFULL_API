let libros = []; // Simulación en memoria sin base de datos

export const getLibros = (req, res) => {
  try {
    res.status(200).json({ data: libros });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de libros' });
  }
};

export const createLibro = (req, res) => {
  const { titulo, autor, anio } = req.body;

  // Validaciones básicas
  const errores = [];
  if (!titulo || titulo.trim() === '') errores.push('El título es obligatorio');
  if (!autor || autor.trim() === '') errores.push('El autor es obligatorio');
  if (!anio || typeof anio !== 'number') errores.push('El año debe ser un número');

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  const nuevoLibro = {
    id: Date.now(), // Simulación de ID único
    titulo,
    autor,
    anio
  };

  libros.push(nuevoLibro);
  res.status(201).json({ data: nuevoLibro });
};
