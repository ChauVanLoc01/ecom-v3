FROM node:22-alpine

EXPOSE 3004

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn generate:all

RUN yarn build

CMD [ "yarn", "pro:order" ]