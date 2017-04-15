# -*- coding: utf-8 -*-
"""Users Admin class. """
import hashlib

from database import db_session
from models import User
from response import Response


class UserAdmin:
    def __init__(self, name=None, email=None, pwd=None):
        self._name = name
        self._email = email
        self._password = pwd

    def register(self):
        if self._name and self._email and self._password:
            if not self._if_user_exists():
                pwd_hash = self._get_hash_pwd()
                new_user = User(name=self._name, email=self._email, password=pwd_hash)
                db_session.add(new_user)
                db_session.commit()
                res = Response(status='success', msg='Signup succeeds')
                return res.as_json
            else:
                res = Response(status='failure', msg='email already existed')
                return res.as_json
        else:
            res = Response(status='failure', msg='Input missing')
            return res.as_json

    def login(self):
        if self._email and self._password:
            pwd_hash = self._get_hash_pwd()
            res = Response(status='success', msg='Login succeeds') \
                if User.query.filter_by(email=self._email, password=pwd_hash).count() == 1 \
                else Response(status='failure', msg='User not registered')
            return res.as_json
        else:
            res = Response(status='failure', msg='Input missing')
            return res.as_json

    def _if_user_exists(self):
        return User.query.filter_by(email=self._email).count() == 1

    def _get_hash_pwd(self):
        if self._password:
            return hashlib.md5(self._password.encode("utf-8")).hexdigest()
