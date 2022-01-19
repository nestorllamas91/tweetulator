FROM node:16.13.2
WORKDIR /home/node/app
COPY package.json ./home/node/app
COPY package-lock.json ./home/node/app
RUN npm ci
COPY . ./home/node/app
RUN npm run build:prod
EXPOSE 8080
CMD ["npm", "run", "start:prod"]
//