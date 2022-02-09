#Create NodeJS Image 
FROM node:16
WORKDIR /usr/app
COPY ./ ./
COPY package*.json ./
RUN npm install 
EXPOSE 5000
CMD ["npm","start"]