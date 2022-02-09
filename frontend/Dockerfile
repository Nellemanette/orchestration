#Create NodeJS Image 
FROM node:16
WORKDIR /usr/app

COPY * ./
COPY ./public /public
COPY ./src /src
RUN ls -l
RUN npm install 

EXPOSE 8081

CMD ["npm","run", "serve"]