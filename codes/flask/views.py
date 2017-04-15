# -*- coding: utf-8 -*-
from flask import render_template, request
from flask.ext.cors import cross_origin

from user_admin import UserAdmin


@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def index():
    return render_template('index.html')


@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def register():
    name = request.values.get('name')
    email = request.values.get('email')
    password = request.values.get('password')
    user_admin = UserAdmin(name=name, email=email, pwd=password)
    return user_admin.register()


@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def login():
    email = request.values.get('email')
    password = request.values.get('password')
    user_admin = UserAdmin(email=email, pwd=password)
    return user_admin.login()
