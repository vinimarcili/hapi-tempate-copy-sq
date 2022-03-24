# Container image that runs your code
FROM node:14-alpine

# Create app directory
WORKDIR /pipeline/source

COPY package*.json ./

RUN apk add git

RUN npm i

# Copy all from the github actions VM, packages installed included 
COPY . .

CMD ["npm","run","start"] 