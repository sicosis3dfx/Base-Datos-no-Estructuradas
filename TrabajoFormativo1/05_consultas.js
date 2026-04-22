// Consulta 1: Por campo simple (sede/ciudad)
db.clientes.find({ "direccion.ciudad": "Renca" })

console.log({
  _id: ObjectId('69e94cd1fd578cbdef0ecbe2'),
  nombre: 'Angelo Zamora',
  email: 's3dfx@inacap.cl',
  direccion: {
    ciudad: 'Renca',
    pais: 'Chile'
  },
  pedidos: []
})

// Consulta 2: Por subdocumento 
db.clientes.find({ "email": "alexander.cortes16@inacapmail.cl" })

console.log({
  _id: ObjectId('69e9532bfd578cbdef0ecbe5'),
  nombre: 'Alexander Cortés',
  email: 'alexander.cortes16@inacapmail.cl',
  direccion: {
    ciudad: 'Batuco',
    pais: 'Chile'
  },
  pedidos: [
    {
      producto: 'Manga',
      cantidad: 1,
      precio: 45000
    }
  ]
})

// Consulta 3: Por arreglo (Buscar clientes que compraron un producto específico)
db.clientes.find({ "pedidos.producto": "Manga" })

console.log({
  _id: ObjectId('69e9532bfd578cbdef0ecbe5'),
  nombre: 'Alexander Cortés',
  email: 'alexander.cortes16@inacapmail.cl',
  direccion: {
    ciudad: 'Batuco',
    pais: 'Chile'
  },
  pedidos: [
    {
      producto: 'Manga',
      cantidad: 1,
      precio: 45000
    }
  ]
})

// Consulta final: Proyección de campos 
// Mostramos solo nombre y email para limpiar el resultado
db.clientes.find(
  {}, 
  { "nombre": 1, "email": 1, "_id": 0 }
)

console.log({
  nombre: 'Angelo Zamora',
  email: 's3dfx@inacap.cl'
})