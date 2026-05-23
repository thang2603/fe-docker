
# State 1: Build the application
FROM node:20 as build

WORKDIR /app

# copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# copy the rest of the application code into the container
COPY . .

# build the application
RUN npm run build

# State 2: Serve the application with nginx

# Use nginx to serve the built application
FROM nginx:alpine

# Copy the built application from the build stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]