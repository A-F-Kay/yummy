from typing import Optional

from fastapi import HTTPException


class NotFound404(HTTPException):
    def __init__(self, message: Optional[str] = None):
        errstr = message if message else "Not found :( [404]"
        super().__init__(status_code=404, detail={"success": False, "message": errstr})


class Conflict409(HTTPException):
    def __init__(self, message: str):
        super().__init__(status_code=409, detail={"success": False, "message": message})


class InternalError500(HTTPException):
    def __init__(self, message: Optional[str] = None):
        errstr = message if message else "Internal server error :( [500]"
        super().__init__(status_code=500, detail={"success": False, "message": errstr})
