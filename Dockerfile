FROM node:16-alpine

#set the working directory to /app
WORKDIR /app

#copying the package.json to the images /app direcory
COPY package*json ./
