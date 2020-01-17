FROM node:latest
WORKDIR /app/wemock-server
ADD package.json ./
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 8083
CMD ["npm","run","dev"]
