FROM node:16.15.0-alpine

WORKDIR /app
COPY package.json .
RUN npm install --silent
COPY . . 

CMD ["npm", "start"]