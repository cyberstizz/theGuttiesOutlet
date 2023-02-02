FROM node:10-alpine
RUN apt-get update && apt-get upgrade && npm install
COPY . .
RUN npm start  
CMD [ "npm", "run", "heroku-postbuild" ]


