import os
from dotenv import load_dotenv

from pymongo import MongoClient

load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

try:
    client.admin.command("ping")
    print(" Conexión establecida 😁 👌")
except:
    print(" ❌ Error de conexión 🤣 🤣")
    exit(code=1)

db = client["ti3032_u3"]
coleccion = db["test"]