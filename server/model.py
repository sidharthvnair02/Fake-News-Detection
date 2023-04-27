from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    uid = db.Column(db.String(32), primary_key = True, unique = True, default = get_uuid)
    email = db.Column(db.String(300), unique = True)
    passwd = db.Column(db.Text, nullable = False)
