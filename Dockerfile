FROM node:16-alpine

#set the working directory to /app
WORKDIR /app

#copying the package.json to the images /app direcory
COPY package*json ./

#installing those dependencies to the server
RUN npm install

# Copy the server source code to the container
COPY . .

#now creating and switching to the client directory in the images client folder
WORKDIR /app/client
