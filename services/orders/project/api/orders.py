 # services/users/project/api/orders.py
from flask import Blueprint, jsonify


orders_blueprint = Blueprint('orders', __name__)

@orders_blueprint.route('/orders/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })
