// 1. Consultar por subdocumento  contacto.email o direccion.ciudad
// Usamos Dot Notation para filtrar clientes en una ciudad específica
db.clientes.find({
  "direccion.ciudad": "Santiago"
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

// 2. Actualizar campo anidado  $set en subdocumento
// Cambiamos la ciudad utilizando la ruta completa del campo
db.clientes.updateOne(
  { nombre: "Angelo Zamora" },
  { $set: { "direccion.ciudad": "Renca" } }
)

console.log({
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
})

// 3. Agregar elemento a un arreglo 
// Añadimos un nuevo pedido al array de un cliente existente
db.clientes.updateOne(
  { nombre: "Alexander Cortés" },
  { $push: {
    "pedidos": {
      "producto": "Teclado Mecánico",
      "cantidad": 1,
      "precio": 55000
    }
  }}
)

console.log({
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
})

// 4. Quitar elemento de un arreglo 
// Removemos un pedido específico basado en el nombre del producto
db.clientes.updateOne(
  { nombre: "Angelo Zamora" },
  { $pull: { "pedidos": { "producto": "Muñeca system" } } }
)

console.log({
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
})