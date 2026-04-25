// Operaciones CRUD: Inserción de Documentos 

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
            "propietario": "Maria Ignacia",
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