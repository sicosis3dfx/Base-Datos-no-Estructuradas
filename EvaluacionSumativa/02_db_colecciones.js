//Gestión de Base de Datos y Colecciones 
//Ejecuta comandos de gestión de bases de datos y colecciones
//Contenido: Comandos use, createCollection, show collections y gestión de eliminación.

// Creación y uso de la base de datos para la clínica
"use ClinicaVeterinariaDB";
console.log("switched to db ClinicaVeterinariaDB")

// Creación de la colección única para mascotas
db.createCollection("mascotas");
console.log({ ok: 1 })

// Verificación de la creación
"show collections"; 
console.log("mascotas")

// Nota: Para eliminar (en caso de re-ejecución)
// db.mascotas.drop();
// db.dropDatabase();