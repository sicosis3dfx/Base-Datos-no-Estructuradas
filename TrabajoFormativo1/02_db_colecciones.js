//1. utilizar la base de datos correspondiente
"use tiendaEnLinea"
console.log("switched to db ecomerce")

//2. crear coleccion clientes
db.createColection("clientes")
console.log({ ok: 1 })

//3. mostrar colecciones
"show clientes"
console.log("clientes")

//4. eliminar colecciones
db.clientes.drop
 console.log(true)