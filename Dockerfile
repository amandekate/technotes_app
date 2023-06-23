# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# # Install dependencies for the client
# RUN cd client && npm install

# # Install dependencies for the server
# RUN cd server && npm install

# Install bcrypt with prebuilt binaries
# RUN cd server/node_modules/bcrypt && npm install bcrypt

# Copy the client and server code to the container
COPY client ./client
COPY server ./server

# Define Ports
ENV CLIENTPORT=3000
ENV SERVERPORT=3500

# Expose the ports required by your app
EXPOSE $CLIENTPORT
EXPOSE $SERVERPORT

# Start the app
# CMD ["sh", "-c", "npm start --prefix client & npm start --prefix server"]
CMD ["sh", "-c", "cd client && npm install && npm start & cd server && npm install && npm start"]