FROM node:16

WORKDIR /app

COPY .env.docker .env
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
