# services/users/project/tests/test_orders.py

import json
import unittest

from project.tests.base import BaseTestCase


class TestUserService(BaseTestCase):
    """Tests for the Users Service."""

    def test_users(self):
        """Ensure the /ping route behaves correctly."""
        response = self.client.get('/orders/ping')
        data = json.loads(response.data.decode())
        self.assertEqual(response.status_code, 200)
        self.assertIn('pong!', data['message'])
        self.assertIn('success', data['status'])

    # para la tabla de customers
    def test_add_customer(self):
        """ Agregando un nuevo cliente"""
        with self.client:
            response = self.client.post(
                '/customers',
                data = json.dumps({
                    'name ':'josVillegas'
                }),
                content_type = 'application/json',
            )
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 201)
            self.assertIn('josVillegas', data['message'])
            self.assertIn('succes', data['status'])

    def test_add_customer_invalid_json(self):
        """Asegurando que se produzca un error si el objeto json esta vacio"""
        with self.client:
            response = self.client.post(
                '/customers',
                data=json.dumps({}),
                content_type='application/json',
            )
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 400)
            self.assertIn('carga invalida', data['message'])
            self.assertIn('fallo', data['status'])

    def test_add_customer_json_keys(self):
        """Asegurando que se produzca un error si el objeto json
        no tiene una clave username"""
        with self.client:
            response = self.client.post(
                '/customers',
                data=json.dumps({'name': 'josVillegas'}),
                content_type='application/json',
            )
            data=json.loads(response.data.decode())
            self.assertEqual(response.status_code, 400)
            self.assertIn('Carga Invalida', data['message'])
            self.assertIn('fallo', data['status'])


if __name__ == '__main__':
    unittest.main()
