//Operaciones CRUD: Inserción de Documentos 
//Criterio 2.1.3: Ejecuta operaciones CRUD en documentos completos
//Contenido: Inserción de pacientes (insertMany), consultas básicas (find).

db.mascotas.insertMany([
    {
        "nombre": "Thor",
        "especie": "Perro",
        "raza": "Golden Retriever",
        "edad": 5,
        "ficha": {
            "propietario": "Angelo Zamora",
            "contacto": "+56912345678",
            "direccion": "Renca, Santiago"
        },
        "historial": [] // Arreglo para subdocumentos de atenciones
    },
    {
        "nombre": "Luna",
        "especie": "Gato",
        "raza": "Siamés",
        "edad": 3,
        "ficha": {
            "propietario": "Alexander Cortés",
            "contacto": "+56987654321",
            "direccion": "Batuco, Santiago"
        },
        "historial": []
    },
    {
        "nombre": "Rex",
        "especie": "Reptil",
        "raza": "Iguana",
        "edad": 2,
        "ficha": {
            "propietario": "Juan Perez",
            "contacto": "+56955544433",
            "direccion": "Providencia, Santiago"
        },
        "historial": []
    }
])

console.log({
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69ee8b20336bc03300665e09'),
    '1': ObjectId('69ee8b20336bc03300665e0a'),
    '2': ObjectId('69ee8b20336bc03300665e0b')
  }
})   

db.mascotas.find({"nombre": "Luna"})

console.log({
  _id: ObjectId('69ee8b20336bc03300665e0a'),
  nombre: 'Luna',
  especie: 'Gato',
  raza: 'Siamés',
  edad: 3,
  ficha: {
    propietario: 'Maria Ignacia',
    contacto: '+56987654321',
    direccion: 'Batuco, Santiago'
  },
  historial: []
})
