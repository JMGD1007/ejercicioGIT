// Importar mongoose para crear la conexion a MongoDb
const mongoose= require("mongoose");

//Conectar la db utilizando el método connect () de mongoose
const mongoDBURL= "mongodb+srv://jenniferguerrero1098:123456789Asd@cluster0.6ocl2da.mongodb.net/proyect";

// Funcion para conectarnos a la DB
function connectDB() {
  return new Promise((res, rej) => {
    // Conectar a la base de datos usando la URL proporcioanada
    mongoose
      .connect(mongoDBURL)
      .then(() => {
        console.log("Conexion a la DB establecida correctamente");
        // Si la conexion es exitosa resolvemos la promesa-
        res();
      })
      .catch((err) => {
        // Si hay un error al conectar, imprimir el error y rechazar la promesa
        console.error("Error al conectar a la DB ", err);
        rej(err);
      });
  });
}

//Exportamos la funcion de la conexion a la base de datos para poder utilizarla en el app.js
module.exports = connectDB;