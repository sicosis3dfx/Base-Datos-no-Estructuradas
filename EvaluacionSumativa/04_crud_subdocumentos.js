//Operaciones CRUD en Subdocumentos (Historial de Atenciones) 
//Ejecuta operaciones CRUD en subdocumentos y modelos lógicos
//Contenido: Manipulación de los datos del dueño con Dot Notation y operaciones en el arreglo de historial médico usando $push y $pull.

// 1. Agregar atención al arreglo historial de Thor ($push)
db.mascotas.updateOne(
    { "nombre": "Thor" },
    { $push: { "historial": { 
        "fecha": "2026-03-25", 
        "motivo": "Vacunación anual", 
        "veterinario": "Dr. Arancibia" 
    } } }
)

console.log({
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
})

// 2. Actualizar datos anidados del dueño o ficha ($set con Dot Notation)
// Usamos el punto para entrar al subdocumento "ficha"
db.mascotas.updateOne(
    { "nombre": "Luna" },
    { $set: { "ficha.contacto": "+56935564885" } }
)

console.log({
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
})

// 3. Quitar un elemento específico del arreglo ($pull)
// Es importante incluirlo porque el profesor lo pide en el checklist de la Unidad 2
db.mascotas.updateOne(
    { "nombre": "Thor" },
    { $pull: { "historial": { "motivo": "Vacunación anual" } } }
)

console.log({
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
})

// 4. Eliminar una mascota por requerimiento (Eliminación)
db.mascotas.deleteOne({ "nombre": "Rex" })

console.log({
  acknowledged: true,
  deletedCount: 1
})