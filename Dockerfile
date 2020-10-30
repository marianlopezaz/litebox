FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
ADD package*.json ./
RUN npm install

# Copying source files
ADD . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]