# app/__init__.py

from flask import Flask
from flask_cors import CORS
import secrets

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configuración de Flask
app.config['SECRET_KEY'] = secrets.token_hex(16)

# Habilitar CORS para permitir solicitudes desde cualquier origen

# Importar rutas y configuraciones de la aplicación
from app.routes.auth_routes import *
