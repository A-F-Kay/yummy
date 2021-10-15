from typing import List

from sqlalchemy.sql import exists

from social.models import UserOrm
from social.serializers import UserModelCreate, BasicResult
from utils.db import session
from utils.http_ex import Conflict409


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


def get_token(username: str, password: str) -> str:
    user = get_user_by_username(username)
    if not user.password == password:
        raise Conflict409("Incorrect password!")

    return user.username


def get_current_user(token: str) -> UserOrm:
    return get_user_by_username(token)


def get_users(*, limit: int = 100, offset: int = 0) -> List[UserOrm]:
    users = session.query(UserOrm).limit(limit).offset(limit * offset)

    return users
