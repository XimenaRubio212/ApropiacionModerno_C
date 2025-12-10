const configurarUsuario = (defaults, personalizadas) => {
  const configFinal = { ...defaults, ...personalizadas };
  const { idioma } = configFinal;
  console.log(`Configuración aplicada: tema = "${configFinal.tema}", idioma = "${idioma}".`);
  return idioma;
};

module.exports = { configurarUsuario };