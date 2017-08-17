FROM mhart/alpine-node:8.4.0

ARG YARN_OPTS
ARG APP_HOME=/app

RUN npm install -g yarn

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY server/package.json server/yarn.lock ./
RUN yarn install $YARN_OPTS

COPY server .
