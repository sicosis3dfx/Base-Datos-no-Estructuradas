// Gestión de Base de Datos y Colecciones 

// Creación y uso de la base de datos para la clínica
"use ClinicaVeterinariaDB";

// Creación de la colección única para mascotas [cite: 39]
db.createCollection("mascotas");

// Verificación de la creación
"show collections"; 

// Nota: Para eliminar (en caso de re-ejecución)
// db.mascotas.drop();
// db.dropDatabase();