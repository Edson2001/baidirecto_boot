FROM node:lts-alpine as state

WORKDIR /app

COPY . .

RUN yarn 

EXPOSE 3030

CMD [ "yarn", "dev" ]