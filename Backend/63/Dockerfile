FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN echo "MONGO_URI=mongodb://mongo:27017/pug\nPORT=3000" > .env
EXPOSE 3000
CMD ["npm", "run", "dev"]

