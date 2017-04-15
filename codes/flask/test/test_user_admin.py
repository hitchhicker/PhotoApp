# -*- coding: utf-8 -*-
import unittest

import photoapp
from models import User


class UserAdminTestCase(unittest.TestCase):
    def setUp(self):
        photoapp.app.config['TESTING'] = True
        self.app = photoapp.app.test_client()

    def tearDown(self):
        User.query.delete()

    def test_register_with_empty_name(self):
        rv = self.register(name='', email='byu@test.com', password='pwd')
        assert rv.data == b'{\n  "message": "Input missing", \n  "status": "failure"\n}\n'

    def test_register_with_empty_email(self):
        rv = self.register(name='test', email='', password='pwd')
        assert rv.data == b'{\n  "message": "Input missing", \n  "status": "failure"\n}\n'

    def test_register_with_empty_password(self):
        rv = self.register(name='test', email='byu@test.com', password='')
        assert rv.data == b'{\n  "message": "Input missing", \n  "status": "failure"\n}\n'

    def test_register_with_right_inputs(self):
        rv = self.register(name='test', email='byu@test.com', password='pwd')
        assert rv.data == b'{\n  "message": "Signup succeeds", \n  "status": "success"\n}\n'

    def test_register_with_user_existed(self):
        self.register(name='test', email='pig@test.com', password='pwd')
        rv = self.register(name='test', email='pig@test.com', password='pwd')
        assert rv.data == b'{\n  "message": "email already existed", \n  "status": "failure"\n}\n'

    def test_login_with_empty_email(self):
        rv = self.login(email='', password='pwd')
        assert rv.data == b'{\n  "message": "Input missing", \n  "status": "failure"\n}\n'

    def test_login_with_empty_password(self):
        rv = self.login(email='byu@test.com', password='')
        assert rv.data == b'{\n  "message": "Input missing", \n  "status": "failure"\n}\n'

    def test_login_with_registered_user(self):
        self.register(name='test', email='byu2@test.com', password='pwd')
        rv = self.login(email='byu2@test.com', password='pwd')
        assert rv.data == b'{\n  "message": "Login succeeds", \n  "status": "success"\n}\n'

    def test_login_with_not_registered_user(self):
        rv = self.login(email='byu3@test.com', password='pwd')
        assert rv.data == b'{\n  "message": "User not registered", \n  "status": "failure"\n}\n'

    def register(self, name, email, password):
        return self.app.post('/register', data=dict(
            name=name,
            email=email,
            password=password
        ), follow_redirects=True)

    def login(self, email, password):
        return self.app.post('/login', data=dict(
            email=email,
            password=password
        ), follow_redirects=True)
