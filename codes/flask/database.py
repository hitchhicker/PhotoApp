"""connect to postgresql."""
# -*- coding: utf-8 -*-
from setting import DATABASE as DB

from sqlalchemy import MetaData, create_engine

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import scoped_session, sessionmaker

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


def init_db():
    import models
    Base.metadata.create_all(bind=engine)


# sudo -u postgres bash -c "psql -c \"CREATE USER admin WITH PASSWORD 'pass';\""