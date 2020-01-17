FROM node:latest
WORKDIR /app/wemock-server
RUN npm install
RUN npm run dev
EXPOSE 8083
