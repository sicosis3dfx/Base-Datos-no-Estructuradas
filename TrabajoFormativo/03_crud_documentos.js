// CREATE: Insertar clientes
db.clientes.insertMany([
  {
    nombre: "Angelo Zamora",
    email: "angelo.zamora@inacap.cl",
    direccion: { ciudad: "Santiago", pais: "Chile" },
    pedidos: [
      { producto: "Muñeca system", cantidad: 10, precio: 50000 }
    ]
  },
  {
    nombre: "Alexander Cortés",
    email: "alexander.cortes16@inacapmail.cl",
    direccion: { ciudad: "Batuco", pais: "Chile" },
    pedidos: [
      { producto: "Manga", cantidad: 1, precio: 45000 }
    ]
  }
])

console.log({
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69e9532bfd578cbdef0ecbe4'),
    '1': ObjectId('69e9532bfd578cbdef0ecbe5')
  }
})

// READ: Visualizar los datos insertados
db.clientes.find({
  "email": "s3dfx@inacap.cl"
})

console.log({
  _id: ObjectId('69e94cd1fd578cbdef0ecbe2'),
  nombre: 'Angelo Zamora',
  email: 's3dfx@inacap.cl',
  direccion: {
    ciudad: 'Santiago',
    pais: 'Chile'
  },
  pedidos: [
    {
      producto: 'Muñeca system',
      cantidad: 10,
      precio: 50000
    }
  ]
})

// UPDATE: Actualizar el email de Angelo (Ejemplo de operador $set)
db.clientes.updateOne(
  { nombre: "Angelo Zamora" },
  { $set: { email: "s3dfx@inacap.cl" } }
)

console.log({
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
})

// DELETE: Eliminar un registro
db.clientes.deleteOne({ nombre: "Alexander Cortés" })

console.log({
  acknowledged: true,
  deletedCount: 1
})   