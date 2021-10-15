from typing import List

from sqlalchemy.sql import exists

from social.models import UserOrm
from social.serializers import UserModelCreate, BasicResult
from utils.db import session


def get_user_by_username(username: str) -> UserOrm:
    """
    Get user by username

    :param username: Username (can start with @)
    :return: UserModel
    """
    username = username[1:] if username.startswith('@') else username

    return session.query(UserOrm).filter(UserOrm.username == username).one()


def validate_user(form: UserModelCreate) -> BasicResult:
    if len(form.password) < 8:
        return BasicResult(success=False, message="Password must be at least 8 characters long!")
    if session.query(exists().where(UserOrm.email == form.email)).scalar():
        return BasicResult(success=False, message='User with such email already registered!')
    if session.query(exists().where(UserOrm.email == form.username)).scalar():
        return BasicResult(success=False, message='Username already taken!')

    return BasicResult(success=True, message="OK")


def create_user_from_form(form: UserModelCreate) -> None:
    new_user = UserOrm(**form.dict())

    session.add(new_user)
    session.commit()


def get_users(*, limit: int = 100, offset: int = 0) -> List[UserOrm]:
    users = session.query(UserOrm).limit(limit).offset(limit * offset)

    return users
