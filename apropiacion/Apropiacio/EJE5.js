const actualizarPerfil = (perfil, ...nuevosDatos) => {
  let nuevoPerfil = { ...perfil };
  for (const dato of nuevosDatos) {
    nuevoPerfil = { ...nuevoPerfil, ...dato };
  }
  console.log("Perfil actualizado:", nuevoPerfil);
  return nuevoPerfil;
};

module.exports = { actualizarPerfil };