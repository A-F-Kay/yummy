FROM node:14.18-alpine

WORKDIR /web

COPY package.json package.json

COPY . .

RUN yarn

EXPOSE 9000
