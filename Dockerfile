## ---- BUILD STAGE ----
FROM node:16-alpine3.15 AS build

RUN apk update && \
  apk add --no-cache jq git openssl

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY tsconfig.json tsoa.json webpack.config.js .yarnrc.yml ./
COPY src ./src
COPY typings ./typings
COPY proto ./proto

RUN yarn build:release

## ---- RUN STAGE ----
FROM node:16-alpine3.15 AS run

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY --from=build /app/build ./build
COPY app.ini ./
COPY proto/ ./proto

ENTRYPOINT [ "yarn", "run", "run" ]
