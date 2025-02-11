FROM node:23.7.0-alpine

WORKDIR /usr/src/cataso/backend

COPY package*.json ./

RUN npm install
RUN apk add --no-cache vim

COPY . .
