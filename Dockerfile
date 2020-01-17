FROM node:latest
WORKDIR /app/wemock-server
ADD package.json ./
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm install -g ts-node --registry=https://registry.npm.taobao.org
EXPOSE 8083
CMD ["npm","run","test"]
