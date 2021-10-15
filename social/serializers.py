"""
Front-end (Swagger) models stored here
"""

import re
from typing import Optional

from pydantic import BaseModel, EmailStr, validator

_username_min_length = 3
_username_max_length = 12


class UserModelCreate(BaseModel):
    email: EmailStr
    username: str
    password: str

    @validator('username')
    def username_latin_only(cls, v):
        p = re.compile(f'^[a-zA-Z]{{{_username_min_length},{_username_max_length}}}')

        if not p.match(v):
            raise ValueError(f'Please enter valid username!')

        return str(v).upper()


class UserModel(BaseModel):
    id: int
    username: str
    name: Optional[str]
    age: Optional[int]

    class Config:
        orm_mode = True
        title = "User"


class BasicResult(BaseModel):
    success: bool
    message: str


class BasicErrResponse(BaseModel):
    detail: BasicResult
