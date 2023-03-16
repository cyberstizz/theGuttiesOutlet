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

#now copying the package.json files from the source codes client directory into the images client directory
COPY client/package*.json ./

#now installing those client dependencies into the images client directory
RUN npm install

#now creating the build file in the images client directory
RUN npm run build

#moving back into the /app directory
WORKDIR /app
