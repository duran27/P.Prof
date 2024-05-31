""" document= {"name":"nico", "edad":"24"}
insert_doc= collection.insert_one(document)

print(f"inserted Document ID: {insert_doc}")
"""


from pymongo import MongoClient

usuario="nicolasdurant27"
password="kQ45E31JuVtxKPig"


client= MongoClient('mongodb+srv://nicolasdurant27:kQ45E31JuVtxKPig@cluster0.c1m7is5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

db = client['nombre_base_datos']
users_collection = db['usuarios']