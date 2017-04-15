# -*- coding: utf-8 -*-
from flask import render_template, request
from user_admin import UserAdmin


def index():
    return render_template('index.html')


def register():
    name = request.values.get('name')
    email = request.values.get('email')
    password = request.values.get('password')
    user_admin = UserAdmin(name=name, email=email, pwd=password)
    return user_admin.register()


def login():
    email = request.values.get('email')
    password = request.values.get('password')
    user_admin = UserAdmin(email=email, pwd=password)
    return user_admin.login()
