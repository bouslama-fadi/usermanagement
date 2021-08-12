#  Dockerfile for Node Express Backend
FROM node:15

# Create App Directory
WORKDIR /app

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 3335

CMD npm run dev
