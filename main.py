#!/usr/bin/env python

from fastapi import FastAPI

from social.views import router

app = FastAPI(dependencies=[], docs_url="/swagger", redoc_url=None)

app.include_router(router)
