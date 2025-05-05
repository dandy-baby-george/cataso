FROM node:23.11.0-alpine
WORKDIR /usr/src/cataso/frontend

COPY package*.json ./
RUN npm install
CMD ["npm", "run", "dev"]
