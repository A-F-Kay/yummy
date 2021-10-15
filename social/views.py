from typing import List

from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm.exc import NoResultFound, MultipleResultsFound

from utils import http_ex
from .serializers import UserModel, UserModelCreate, BasicResult, BasicErrResponse, TokenResponse, CurrentUserModel
from .services import get_user_by_username, get_users, validate_user, create_user_from_form, get_token

router = APIRouter(tags=["Social"], prefix="/users")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/token")


@router.get("/", response_model=List[UserModel])
async def users_list(limit: int = 100, offset: int = 0) -> List[UserModel]:
    orm_users = get_users(limit=limit, offset=offset)

    return [UserModel.from_orm(u) for u in orm_users]


@router.post("/register", response_model=BasicResult)
async def register_user(new_user: UserModelCreate) -> BasicResult:
    validation_result = validate_user(new_user)
    if not validation_result.success:
        raise http_ex.Conflict409(validation_result.message)

    create_user_from_form(new_user)

    return validation_result


@router.get("/@", response_model=CurrentUserModel)
async def get_me(token: str = Depends(oauth2_scheme)):
    user_orm = get_user_by_username(token)

    return CurrentUserModel.from_orm(user_orm)


@router.post("/token", response_model=TokenResponse, tags=["Auth"])
async def login(form: OAuth2PasswordRequestForm = Depends()):
    token = get_token(form.username, form.password)

    return TokenResponse(access_token=token)


@router.get("/{username}", responses={
    200: {"model": UserModel},
    404: {"model": BasicErrResponse},
    500: {"model": BasicErrResponse},
})
async def get_user(username: str) -> UserModel:
    try:
        user_orm = get_user_by_username(username)

        return UserModel.from_orm(user_orm)
    except NoResultFound:
        raise http_ex.NotFound404("Не найдено :(")
    except MultipleResultsFound:
        raise http_ex.InternalError500()
