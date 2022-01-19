FROM node:16.13.2
WORKDIR /app
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm ci
COPY ./ /app
RUN npm run build:prod
EXPOSE 8080
CMD ["npm", "run", "start:prod"]
