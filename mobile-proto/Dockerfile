FROM node:latest
MAINTAINER Mat <mat@alabaster.de>

# Install missing tools
RUN apt-get update && apt-get install -y \
  apt-utils \
  netcat \
  vim

RUN mkdir -p /src
WORKDIR /src

# Bundle app source
COPY package.json /src
COPY build/* /src/build/
COPY server.js /src
COPY webpack* /src/

# Install modules
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
