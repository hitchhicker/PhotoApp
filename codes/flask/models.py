# -*- coding: utf-8 -*-
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Integer, Sequence, Column, ForeignKey
from sqlalchemy.types import VARCHAR, CHAR, TIMESTAMP, TEXT
from sqlalchemy.orm import relationship

from database import db_session

Base = declarative_base()


class User(Base):
    """Sqlalchemy User model"""
    __tablename__ = '_user'
    query = db_session.query_property()

    id = Column(Integer, Sequence('_user_id_seq'), primary_key=True)
    email = Column(VARCHAR(255), unique=True, nullable=False)
    password = Column(CHAR(32), nullable=False)
    name = Column(VARCHAR(255), nullable=False)


class Photo(Base):
    """Sqlalchemy Photo model"""
    __tablename__ = 'photo'
    query = db_session.query_property()

    id = Column(Integer, Sequence('_photo_id_seq'), primary_key=True)
    url = Column(TEXT, nullable=False)
    created_time = Column(TIMESTAMP, nullable=False)
    created_by = Column(Integer, ForeignKey('_user.id'), nullable=False)
    recommended_count = Column(Integer, default=0)
    rank = Column(Integer, default=0)
    creator = relationship('User', foreign_keys=[created_by])

#
# class PhotoHistory(Base):
#     """Sqlalchemy Photo model"""
#     __tablename__ = 'photo'
#     query = db_session.query_property()
#
#     id = Column(Integer, Sequence('_photo_id_seq'), primary_key=True)
#     url = Column(TEXT, nullable=False)
#     created_time = Column(TIMESTAMP, nullable=False)
#     created_by = Column(Integer, ForeignKey('_user.id'), nullable=False)
#     recommended_count = Column(Integer, default=0)
#     rank = Column(Integer, default=0)
#     creator = relationship('User', foreign_keys=[created_by])


class UserViewsPhoto(Base):
    """Sqlalchemy UserViewPhoto model"""
    __tablename__ = 'user_views_photo'
    query = db_session.query_property()

    id = Column(Integer, Sequence('_photo_id_seq'), primary_key=True)
    user_id = Column(Integer, ForeignKey('_user.id'), nullable=False)
    photo_id = Column(Integer, ForeignKey('photo.id'), nullable=False)
    view_time = Column(TIMESTAMP, nullable=False)

    user = relationship('User', foreign_keys=[user_id])
    photo = relationship('Photo', foreign_keys=[photo_id])


class UserCollectsPhoto(Base):
    """Sqlalchemy UserCollectsPhoto model"""
    __tablename__ = 'user_collects_photo'
    query = db_session.query_property()

    id = Column(Integer, Sequence('activity_id_seq'), primary_key=True)
    user_id = Column(Integer, ForeignKey('_user.id'), nullable=False)
    photo_id = Column(Integer, ForeignKey('photo.id'), nullable=False)
    collect_time = Column(TIMESTAMP, nullable=False)

    user = relationship('User', foreign_keys=[user_id])
    photo = relationship('Photo', foreign_keys=[photo_id])
