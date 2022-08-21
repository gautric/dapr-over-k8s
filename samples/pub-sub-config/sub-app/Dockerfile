FROM node:18-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
USER 1000
CMD [ "node", "app.js" ]