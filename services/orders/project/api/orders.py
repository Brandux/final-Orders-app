 # services/users/project/api/orders.py
from flask import Blueprint, jsonify, request

from project.api.models import Customers
from project import db
orders_blueprint = Blueprint('orders', __name__)

@orders_blueprint.route('/orders/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })

@orders_blueprint.route('/customer', methods=['POST'])
def add_customer():
    post_data=request.get_json()
    name=post_data.get('name')
    db.session.add(Customers(name=name))
    db.session.commit()
    responde_object = {
        'status':'success',
        'message': f'{name} was added!'
    }
    return jsonify(responde_object), 201