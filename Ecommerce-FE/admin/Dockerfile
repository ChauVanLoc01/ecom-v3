FROM node:20-alpine

EXPOSE 4000

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]