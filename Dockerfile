FROM node:lts-iron as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build static content
RUN npm run build

FROM nginx:stable-alpine
COPY provision/nginx.conf /etc/nginx/nginx.conf
WORKDIR /app
COPY --from=builder /app/dist /app/dist
