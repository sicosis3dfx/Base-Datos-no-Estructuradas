"CRUD"

// CREATE: Insertar clientes
db.clientes.insertMany([
{nombre : "Angelo Zamora",
  email : "angelo.zamora@inacap.cl",
  direccion : { ciudad : "Santiago", pais : "Chile"},
 pedidos : [
    { produuctos : "Muñeca system",
     cantidad: 10,
     precio: 50000}
    ]
},
{nombre : "Alexander Cortés",
   email : "alexander.cortes16@inacapmail.cl",
   direccion : { ciudad : "Batuco", pais: "Chile" },
  pedidos : [
    { producto: "Manga hentai gore",
        cantidad: 1,
        precio: 45000 }
    ]
}]
);