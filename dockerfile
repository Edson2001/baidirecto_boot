FROM node:lts-alpine as state

WORKDIR /app

COPY . .

RUN yarn 

EXPOSE ${ENV_PORT_APP}

CMD [ "yarn", "dev" ]