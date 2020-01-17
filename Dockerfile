FROM node:latest
WORKDIR /app/wemock-server
EXPOSE 8083
CMD ["npm","install;","npm","run","dev"]
