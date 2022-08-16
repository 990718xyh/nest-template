FROM node:16.14-alpine AS build

WORKDIR /blog

MAINTAINER {you name}:{your Email}

RUN npm i

COPY . .

FROM node:16.14-alpine

WORKDIR /www/wwwServer/nestjs-template

COPY --from=build /blog/node_modules ./node_modules
COPY --from=build /blog/package.json ./
COPY --from=build /blog/dist ./dist

EXPOSE 34512

ENTRYPOINT node ./dist/main.js