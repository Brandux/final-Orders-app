# services/pedidos/manage.py


import unittest
import coverage
import datetime

from flask.cli import FlaskGroup

from project import create_app, db # nuevo
from project.api.models import Customer,Product,Order,Item

COV = coverage.coverage(
    branch=True,
    include='project/*',
    omit=[
        'project/tests/*',
        'project/config.py',
    ]
)
COV.start()

app = create_app()
cli = FlaskGroup(create_app=create_app)


@cli.command('recreate_db')
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@cli.command()
def test():
    """ Ejecutar las pruebas sin covertura de codigo"""
    tests = unittest.TestLoader().discover('project/tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


@cli.command('seed_db')
def seed_db():
    """Sembrado en la base de datos: Customers"""
    db.session.add(Customer(name='brandux'))
    db.session.add(Customer(name='toshi'))
    """Sembrando en base datos: Producto"""
    db.session.add(Product(name='Pan Integral'))
    db.session.add(Product(name='Palitos Union'))
    """Sembrando datos en base de datos: orders"""
    db.session.add(Order(customer_id=1, date=datetime.datetime.now()))
    """Sembrando datos en item"""
    db.session.add(Item(order_id=1, product_id=1, quantity= 20))

    db.session.commit()

@cli.command()
def cov():
    """Ejecuta las pruebas unitarias con coverage."""
    tests = unittest.TestLoader().discover('project/tests')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        COV.stop()
        COV.save()
        print('Resumen de cobertura:')
        COV.report()
        COV.html_report()
        COV.erase()
        return 0
    sys.exit(result)

if __name__ == '__main__':
   cli()
