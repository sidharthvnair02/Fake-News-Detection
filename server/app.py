from flask import Flask, request, abort, jsonify, session
from flask_bcrypt import Bcrypt
from flask_session import Session
from config import ApplicationConfig
from model import db, User

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unathorized"}), 401
    
    user = User.query.filter_by(uid = user_id).first()

    return jsonify({
        "uid": user.uid,
        "email": user.email
    })

@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    passwd = request.json["passwd"]

    user_exists = User.query.filter_by(email = email).first() is not None

    if user_exists:
        return jsonify({"error": "User Already Exist"}), 409
    
    hashed_passwd = bcrypt.generate_password_hash(passwd)
    new_user = User(email = email, passwd = hashed_passwd)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.uid

    return jsonify({
        "uid": new_user.uid,
        "email": new_user.email
    })

@app.route('/login', methods=["POST"])
def login_user():
    email = request.json["email"]
    passwd = request.json["passwd"]

    user = User.query.filter_by(email = email).first() 

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401
    
    if not bcrypt.check_password_hash(user.passwd, passwd):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.uid
       
    return jsonify({
        "uid": user.uid,
        "email": user.email
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

if __name__ == "__main__":
    app.run(debug = True)