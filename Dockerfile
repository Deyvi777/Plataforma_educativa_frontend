FROM node:alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
# CMD [ "npm", "start" ]
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0  /app/build /usr/share/nginx/html