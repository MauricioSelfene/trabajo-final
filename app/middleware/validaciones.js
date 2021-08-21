const { validationResult } = require("express-validator");

const validacionesCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors);
  else next();
};

const validaRol = async (rol, key) => {
  if (rol !== key) throw new Error(`El usuario  con privilegios de ${rol} no tiene permisos suficientes`);
};

module.exports = {
  validacionesCampos,
  validaRol
};
