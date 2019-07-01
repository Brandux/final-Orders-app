# services/users/project/tests/test_user_model.py


import unittest

from project import db
from project.api.models import Customer
from project.tests.base import BaseTestCase
# from project.tests.utils import add_customer

from sqlalchemy.exc import IntegrityError


class TestUserModel(BaseTestCase):

    def test_add_customer(self):
        customer = Customer(
            name='brandux'
        )
        # user = add_user('justatest', 'test@test.com')
        db.session.add(customer)
        db.session.commit()
        self.assertTrue(customer.id)
        self.assertEqual(customer.name, 'brandux')

    def test_add_customer_duplicate_name(self):
        customer = Customer(
            name='brandux'
        )
        # add_user('justatest', 'test@test.com')
        db.session.add(customer)
        db.session.commit()
        duplicate_customer = customer(
            name='brandux'
        )
        db.session.add(duplicate_customer)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_to_json(self):
        customer = Customer(
            name='brandux'
        )
        # add_user('justatest', 'test@test.com')
        db.session.add(customer)
        db.session.commit()
        self.assertTrue(isinstance(customer.to_json(), dict))


if __name__ == '__main__':
    unittest.main()
