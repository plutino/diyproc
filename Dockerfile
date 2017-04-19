FROM mhart/alpine-node:6.10.2

ARG YARN_OPTS
ARG APP_HOME=/app

EXPOSE 3000

RUN npm install -g yarn

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json yarn.lock ./
RUN yarn install $YARN_OPTS

COPY . .

CMD yarn start
