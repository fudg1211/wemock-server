FROM node:latest
WORKDIR /app/wemock-server
EXPOSE 8083
CMD ["sh","-c","npm install && npm run dev"]
