// Operaciones CRUD en Subdocumentos (Historial de Atenciones) 

// 1. Agregar una nueva atención al historial (Creación)
db.mascotas.updateOne(
    { "nombre": "Thor" },
    { $push: { "historial": { 
        "fecha": "2026-03-25", 
        "motivo": "Vacunación anual", 
        "veterinario": "Dr. Arancibia" 
    } } }
);

// 2. Actualizar un dato específico de la ficha
db.mascotas.updateOne(
    { "nombre": "Luna" },
    { $set: { "ficha.contacto": "+56900000000" } }
);

// 3. Eliminar una mascota por requerimiento (Eliminación)
// db.mascotas.deleteOne({ "nombre": "Rex" });