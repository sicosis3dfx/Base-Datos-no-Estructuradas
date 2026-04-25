// Búsqueda y Visualización de Documentos 

// 1. Ver todas las mascotas registradas [cite: 43]
db.mascotas.find().pretty()

// 2. Buscar mascotas de una especie específica [cite: 60, 69]
db.mascotas.find({ "especie": "Perro" })

// 3. Consultar mascotas que tengan atenciones en su historial
db.mascotas.find({ "historial.0": { $exists: true } })

// 4. Buscar por nombre del propietario dentro del subdocumento ficha
db.mascotas.find({ "ficha.propietario": "Angelo Zamora" })