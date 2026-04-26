// Búsqueda y Visualización de Documentos 

// 1. Ver todas las mascotas registradas [cite: 43]
db.mascotas.find().pretty()

console.log({
  _id: ObjectId('69ee8b20336bc03300665e09'),
  nombre: 'Thor',
  especie: 'Perro',
  raza: 'Golden Retriever',
  edad: 5,
  ficha: {
    propietario: 'Angelo Zamora',
    contacto: '+56912345678',
    direccion: 'Renca, Santiago'
  },
  historial: []
}
{
  _id: ObjectId('69ee8b20336bc03300665e0a'),
  nombre: 'Luna',
  especie: 'Gato',
  raza: 'Siamés',
  edad: 3,
  ficha: {
    propietario: 'Maria Ignacia',
    contacto: '+56935564885',
    direccion: 'Batuco, Santiago'
  },
  historial: []
})

// 2. Buscar mascotas de una especie específica [cite: 60, 69]
db.mascotas.find({ "especie": "Perro" })

console.log({
  _id: ObjectId('69ee8b20336bc03300665e09'),
  nombre: 'Thor',
  especie: 'Perro',
  raza: 'Golden Retriever',
  edad: 5,
  ficha: {
    propietario: 'Angelo Zamora',
    contacto: '+56912345678',
    direccion: 'Renca, Santiago'
  },
  historial: []
})

// 3. Consultar mascotas que tengan atenciones en su historial si es que existen (Uso de $exists en subdocumentos)
db.mascotas.find({ "historial.0": { $exists: true } })

// 4. Buscar por nombre del propietario dentro del subdocumento ficha
db.mascotas.find({ "ficha.propietario": "Alexander Cortés" })

console.log({
  _id: ObjectId('69ee97f9336bc03300665e0c'),
  nombre: 'Luna',
  especie: 'Gato',
  raza: 'Siamés',
  edad: 3,
  ficha: {
    propietario: 'Alexander Cortés',
    contacto: '+56987654321',
    direccion: 'Batuco, Santiago'
  },
  historial: []
})