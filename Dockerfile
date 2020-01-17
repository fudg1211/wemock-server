FROM node:latest
WORKDIR /app/wemock-server
ADD package.json ./
RUN npm install
RUN npm run dev
EXPOSE 8083
