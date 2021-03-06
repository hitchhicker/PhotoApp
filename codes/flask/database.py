"""connect to postgresql."""
# -*- coding: utf-8 -*-
from setting import DATABASE, DATABASE_TESTING

from sqlalchemy import MetaData, create_engine

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import scoped_session, sessionmaker

from photoapp import *

DB = DATABASE_TESTING if app.config['TESTING'] else DATABASE

engine = create_engine('postgresql://%s:%s@%s/%s' % (
    DB['user'],
    DB['password'],
    DB['host'],
    DB['database']), convert_unicode=True, encoding='utf-8')

try:
    mymetadata = MetaData(bind=engine)
except Exception as e:
    print(e)
Base = declarative_base(metadata=mymetadata)
db_session = scoped_session(sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine))
