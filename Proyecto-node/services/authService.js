const jwt = require("jsonwebtoken");

// Almacenamos nuestra clave secreta

const JWT_SECRET =
  "e37222a40a11dd2792decfd20b513c919660c5d1a1259e79f41e134f73b47331";

// Creamos una funcion para generar un token JWT

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token
}

module.exports= {
    generateToken
}