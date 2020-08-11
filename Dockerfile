FROM node:11

LABEL maintainer="Dusadee"


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/
RUN npm install

ADD . /usr/src/app

CMD ["npm", "run", "prod"]

EXPOSE 3000
