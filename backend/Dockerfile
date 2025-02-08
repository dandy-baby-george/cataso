FROM node:23.7.0-alpine

WORKDIR /usr/src/cataso/backend

COPY package.json package-lock.json ./

RUN npm install

RUN apk add --no-cache vim

EXPOSE 3000

CMD npm start
