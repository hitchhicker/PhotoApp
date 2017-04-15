# -*- coding: utf-8 -*-
from flask import jsonify


class Response(object):
    def __init__(self, status, msg):
        self._status = status
        self._message = msg

    def __repr__(self):
        return 'status: %s\nmessage: %s\n' % (self._status, self._message)

    @property
    def as_json(self):
        return jsonify({
            'status': self._status,
            'message': self._message
    })
