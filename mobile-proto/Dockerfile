FROM node:latest 
MAINTAINER Mat <mat@alabaster.de> 

# Install missing tools
RUN apt-get update && apt-get install -y \
  apt-utils \
  netcat \
  vim

RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
COPY package.json /src
RUN npm install

# Bundle app source
COPY . /src

EXPOSE 3000
CMD [ "npm", "start" ]

