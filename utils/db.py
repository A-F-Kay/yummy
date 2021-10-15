from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import os

def _get_connection_str():
    try:
        dbname = os.environ['YUMMY_DB']
        pwd = os.environ['YUMMY_PWD']
        user = 'postgres'
        host = 'localhost'
        port = 5432

        return f'postgresql://{user}:{pwd}@{host}:{port}/{dbname}'

    except KeyError:
        print("TODO: load env variables from .env")
        print("FATAL: Please provide $YUMMY_DB and $YUMMY_PWD to your env")
        exit(1)

_engine = create_engine(_get_connection_str(), echo=True)

session = sessionmaker(bind=_engine)()
