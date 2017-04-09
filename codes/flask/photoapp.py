# -*- coding: utf-8 -*-
from flask import Flask
from database import init_db

import views

app = Flask(__name__)
init_db()

app.secret_key = \
    b'\xac}|\xe3\x19=M\xc9\xc0\xf8\x04\x11k\x87\xa0-\xe0M\xe5Ua|\x92I'

app.add_url_rule('/', view_func=views.index)
app.add_url_rule('/signup', view_func=views.signup, methods=['POST', ])
app.add_url_rule('/login', view_func=views.login, methods=['POST', ])

if __name__ == "__main__":
    app.run(debug=True)
