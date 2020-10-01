from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from flask_cors import CORS
import json
import hashlib
from database import User, Cart
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os


engine = create_engine('sqlite:///data.db')
DbSession = sessionmaker(bind=engine)
app = Flask(__name__)
jwt = JWTManager(app)
CORS(app)
app.config['JWT_SECRET_KEY'] = os.environ['secretKey']


@app.route('/login/', methods=["get", 'post'])
def login():
    data = json.loads(request.data)
    db = DbSession()
    print(data)
    user = db.query(User).filter_by(email=data['email'], password=hashlib.sha256(data['password'].encode()).hexdigest()).first()
    print(user)
    if user:
        token = create_access_token(identity=data['email'])
        return jsonify({'token': token, "action": "successful"})
    return jsonify({'action': "failed"})


@app.route('/signup/', methods=['get', 'post'])
def signup():
    data = json.loads(request.data)
    try:
        user = User(name=data['name'], email=data['email'], password=hashlib.sha256(data['password'].encode()).hexdigest())
        db = DbSession()
        db.add(user)
        db.commit()
        db.close()
        return jsonify({'action': 'successful'})
    except:
        return jsonify({'action': 'failed'})


@app.route('/authenticate/', methods=['get', 'post'])
@jwt_required
def testingApi():
    return jsonify({'verified': 'true'})


if __name__ == '__main__':
    app.run()
