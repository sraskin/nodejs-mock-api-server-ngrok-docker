FROM node:16.13.1-buster-slim

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app

ARG PORT=3400
ENV PORT $PORT

COPY . .

RUN npm ci

USER node

CMD npm run start