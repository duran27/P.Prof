""" document= {"name":"nico", "edad":"24"}
insert_doc= collection.insert_one(document)

print(f"inserted Document ID: {insert_doc}")
"""
import logging

from pymongo import MongoClient

usuario="nicolasdurant27"
password="kQ45E31JuVtxKPig"

logging.basicConfig(level=logging.INFO)




client= MongoClient('mongodb+srv://nicolasdurant27:kQ45E31JuVtxKPig@cluster0.c1m7is5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

db = client['nombre_base_datos']
users_collection = db['usuarios']


def check_db_connection():
    try:
        client.server_info()
        logging.info("DB Connection established")
    except:
        logging.error("DB Connection could not be established")


check_db_connection()
