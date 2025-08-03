let prestamos = []; // Simulación en memoria

export const obtenerPrestamos = (req, res) => {
  res.status(200).json({ data: prestamos });
};

export const obtenerPrestamoPorId = (req, res) => {
  const { id } = req.params;
  const prestamo = prestamos.find(p => p.id === Number(id));
  if (!prestamo) return res.status(404).json({ errores: ['Préstamo no encontrado'] });
  res.status(200).json({ data: prestamo });
};

export const crearPrestamo = (req, res) => {
  const { libroId, usuarioId, fechaPrestamo } = req.body;

  // Validación básica
  if (!libroId || !usuarioId || !fechaPrestamo) {
    return res.status(400).json({ errores: ['Todos los campos son obligatorios'] });
  }

  const nuevoPrestamo = {
    id: Date.now(), // Simula generación de ID
    libroId,
    usuarioId,
    fechaPrestamo
  };

  prestamos.push(nuevoPrestamo);
  res.status(201).json({ data: nuevoPrestamo });
};

export const actualizarPrestamo = (req, res) => {
  const { id } = req.params;
  const index = prestamos.findIndex(p => p.id === Number(id));
  if (index === -1) return res.status(404).json({ errores: ['Préstamo no encontrado'] });

  prestamos[index] = { ...prestamos[index], ...req.body };
  res.status(200).json({ data: prestamos[index] });
};

export const eliminarPrestamo = (req, res) => {
  const { id } = req.params;
  const index = prestamos.findIndex(p => p.id === Number(id));
  if (index === -1) return res.status(404).json({ errores: ['Préstamo no encontrado'] });

  const eliminado = prestamos.splice(index, 1);
  res.status(200).json({ data: eliminado[0] });
};

