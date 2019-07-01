# services/pedidos/project/api/pedidos.py


from flask import Blueprint, jsonify, request

from project.api.models import Customer, Product, Order, Item
from project import db
from sqlalchemy import exc


pedidos_blueprint = Blueprint('pedidos', __name__)


@pedidos_blueprint.route('/pedidos/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong'
    })


@pedidos_blueprint.route('/customers', methods=['POST'])
def add_customer():
    post_data = request.get_json()
    response_object = {
        'status': 'failed',
        'message': 'Carga invalida.'
    }
    if not post_data:
        return jsonify(response_object), 400
    name = post_data.get('name')
    try:
        customer = Customer.query.filter_by(name=name).first()
        if not customer:
            db.session.add(Customer(name=name))
            db.session.commit()
            response_object['status'] = 'success'
            response_object['message'] = f'{name} ha sido agregado !'
            return jsonify(response_object), 201
        else:
            response_object['message'] = 'Lo siento. El usuario ya existe'
            return jsonify(response_object), 400
    except exc.IntegrityError:
        db.session.rollback()
        return jsonify(response_object), 400


@pedidos_blueprint.route('/customers/<customer_id>', methods=['GET'])
def get_single_customer(customer_id):
    """Obtener detalles de usuario único"""
    response_object = {
        'status': 'failed',
        'message': 'El customer no existe'
    }
    try:
        customer = Customer.query.filter_by(id=int(customer_id)).first()
        if not customer:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'id': customer.id,
                    'name': customer.name
                   }
              }
        return jsonify(response_object), 200
    except ValueError:
        return jsonify(response_object), 404


@pedidos_blueprint.route('/customers', methods=['GET'])
def get_all_customers():
    """Obteniendo todos los customers"""
    response_object = {
        'status': 'success',
        'data': {
            'customer': [
              customer.to_json()
              for customer in
              Customer.query.all()
            ]
        }
    }
    return jsonify(response_object), 200


#  API para obtener todos los resultados de productos
@pedidos_blueprint.route('/products', methods=['GET'])
def get_all_products():
    """Obteniendo todos los products"""
    response_object = {
        'status': 'success',
        'data': {
            'products': [
              product.to_json()
              for product in
              Product.query.all()
            ]
        }
    }
    return jsonify(response_object), 200


#  api para obtener articulo con el id unico
@pedidos_blueprint.route('/products/<products_id>', methods=['GET'])
def get_single_products(products_id):
    """Obtener detalles de usuario único"""
    response_object = {
        'status': 'failed',
        'message': 'El products_id no existe'
    }
    try:
        product = Product.query.filter_by(id=int(products_id)).first()
        if not product:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'id': product.id,
                    'name': product.name
                   }
              }
        return jsonify(response_object), 200
    except ValueError:
        return jsonify(response_object), 404


# Api para registrar un nuevo producto
@pedidos_blueprint.route('/products', methods=['POST'])
def add_product():
    post_data = request.get_json()
    response_object = {
        'status': 'failed',
        'message': 'Carga invalida.'
    }
    if not post_data:
        return jsonify(response_object), 400
    name = post_data.get('name')
    try:
        product = Product.query.filter_by(name=name).first()
        if not product:
            db.session.add(Product(name=name))
            db.session.commit()
            response_object['status'] = 'success'
            response_object['message'] = f'{name} ha sido agregado !'
            return jsonify(response_object), 201
        else:
            response_object['message'] = 'Lo siento. El usuario ya existe'
            return jsonify(response_object), 400
    except exc.IntegrityError:
        db.session.rollback()
        return jsonify(response_object), 400


# ------------------------------------
# para obtener los pedidos
@pedidos_blueprint.route('/order', methods=['GET'])
def get_all_order():
    """Obteniendo todos los products"""
    response_object = {
        'status': 'success',
        'data': {
            'order': [
              order.to_json()
              for order in
              Order.query.all()
            ]
        }
    }
    return jsonify(response_object), 200


#  api para buscar las ordenes del custoemr
@pedidos_blueprint.route('/order/<order_id>', methods=['GET'])
def get_single_order(order_id):
    """Obtener detalles de usuario único"""
    response_object = {
        'status': 'failed',
        'message': 'El order_id no existe'
    }
    try:
        order = Order.query.filter_by(id=int(order_id)).first()
        # query= text("select o.id, c.name as  cliente, o.date as fecha"+
        #    "from orders o join customers c on c.id = o.customer_id"+
        #    "where o.id = :order_id")
        # order = Order.engine.execute(query, order_id=order_id)
        if not order:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'id': order.id,
                    'customer_id': order.customer_id,
                    'date': order.date
                   }
              }
        return jsonify(response_object), 200
    except ValueError:
        return jsonify(response_object), 404


# select o.id, c.name as  cliente, o.date as fecha
# from orders o
# join customers c on c.id = o.customer_id
# where o.customer_id = 1;

# API PARA REGISTRAR NUEVO PEDIDO
@pedidos_blueprint.route('/order', methods=['POST'])
def add_order():
    post_data = request.get_json()
    response_object = {
        'status': 'failed',
        'message': 'Carga invalida.'
    }
    if not post_data:
        return jsonify(response_object), 400
    customer_id = post_data.get(
        'customer_id',
        )
    date = post_data.get('date')
    try:
        order = Order.query.filter_by(
            customer_id=customer_id,
            date=date
            ).first()
        if not order:
            db.session.add(Order(customer_id=customer_id, date=date))
            db.session.commit()
            response_object['status'] = 'success'
            response_object['message'] = f'{customer_id} ha sido agregado !'
            return jsonify(response_object), 201
        else:
            response_object['message'] = 'Lo siento. El orders ya existe'
            return jsonify(response_object), 400
    except exc.IntegrityError:
        db.session.rollback()
        return jsonify(response_object), 400


# ------------------------------------
# para obtener los pedidos
@pedidos_blueprint.route('/item', methods=['GET'])
def get_all_itemr():
    """Obteniendo todos los products"""
    response_object = {
        'status': 'success',
        'data': {
            'item': [
              item.to_json()
              for item in
              Item.query.all()
            ]
        }
    }
    return jsonify(response_object), 200


#  api para buscar las los items de los pedidos
@pedidos_blueprint.route('/item/<item_id>', methods=['GET'])
def get_single_item(item_id):
    """Obtener detalles de usuario único"""
    response_object = {
        'status': 'failed',
        'message': 'El item_id no existe'
    }
    try:
        item = Item.query.filter_by(id=int(item_id)).first()
        if not item:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'id': item.id,
                    'order_id': item.order_id,
                    'product_id': item.product_id,
                    'quantity': item.quantity
                   }
              }
        return jsonify(response_object), 200
    except ValueError:
        return jsonify(response_object), 404
