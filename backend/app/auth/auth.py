from flask import request, jsonify, current_app
from app import app
from app.database.db import users_collection
import bcrypt
import jwt

# Función de generación de token
def generate_access_token(user_id):
    return jwt.encode({'user_id': str(user_id)}, current_app.config['SECRET_KEY'], algorithm='HS256')

# Función para obtener un usuario por su correo electrónico
def get_user_by_email(email):
    # Buscar el usuario en la base de datos por su correo electrónico
    user = users_collection.find_one({'email': email})
    return user

# Ruta de registro (signup)
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Verificar si el correo electrónico ya está registrado
    if get_user_by_email(email):
        return jsonify({'message': 'El correo electrónico ya está registrado'}), 400

    # Hash de la contraseña
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Guardar el usuario en la base de datos
    user_id = users_collection.insert_one({'name': name, 'email': email, 'password': hashed_password}).inserted_id

    # Generar token de acceso
    access_token = generate_access_token(user_id)
    return jsonify({'access_token': access_token})

# Ruta de inicio de sesión (login)
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Obtener el usuario de la base de datos por su correo electrónico
    user = get_user_by_email(email)
    if not user:
        return jsonify({'message': 'Credenciales inválidas'}), 401

    # Verificar la contraseña
    if not bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({'message': 'Credenciales inválidas'}), 401

    # Generar token de acceso
    access_token = generate_access_token(user['_id'])
    return jsonify({'access_token': access_token})