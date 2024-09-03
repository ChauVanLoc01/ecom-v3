FROM node:20-alpine

EXPOSE 3001

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn generate:all

RUN yarn build

CMD [ "yarn", "pro:user" ]