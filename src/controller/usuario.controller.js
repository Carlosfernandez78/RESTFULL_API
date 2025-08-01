exports.obtenerUsuarios = (req, res) => {
  res.send('Obteniendo todos los usuarios');
};

exports.obtenerUsuarioPorId = (req, res) => {
  res.send(`Obteniendo usuario con ID ${req.params.id}`);
};

exports.crearUsuario = (req, res) => {
  res.send('Creando nuevo usuario');
};

exports.actualizarUsuario = (req, res) => {
  res.send(`Actualizando usuario con ID ${req.params.id}`);
};

exports.eliminarUsuario = (req, res) => {
  res.send(`Eliminando usuario con ID ${req.params.id}`);
};
