FROM node:latest
WORKDIR /app/wemock-server
VOLUME "/home/fudongguang/servers/wemock-server" "/app/wemock-server"
RUN ls
RUN npm install
RUN npm run dev
EXPOSE 8083
