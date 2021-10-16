import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base

from utils import db

Base = declarative_base()


class UserOrm(Base):
    __tablename__ = 'users'

    id = sa.Column(sa.Integer, primary_key=True, autoincrement=True)
    name = sa.Column(sa.String, default=None)
    password = sa.Column(sa.String)  # FIXME: do not store passwords like this
    email = sa.Column(sa.String)
    username = sa.Column(sa.String)
    age = sa.Column(sa.Integer, default=None)
    is_admin = sa.Column(sa.Boolean, default=None)


Base.metadata.create_all(db.engine)
