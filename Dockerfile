FROM node:latest
WORKDIR /app/wemock-server
ADD package.json ./
RUN npm install
EXPOSE 8083
CMD ["npm","run","dev"]
