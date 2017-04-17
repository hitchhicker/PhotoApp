# -*- coding: utf-8 -*-
from flask import jsonify


class Response(object):
    def __init__(self, status, msg, **kwargs):
        self._status = status
        self._message = msg
        self._others = kwargs

    def __repr__(self):
        return 'status: %s\nmessage: %s\n' % (self._status, self._message)

    @property
    def as_json(self):
        res = {
            'status': self._status,
            'message': self._message
        }
        for key, value in self._others.items():
            res[key] = value
        return jsonify(res)
