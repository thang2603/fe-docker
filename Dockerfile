# Stage 1: Build source code React
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 1. Khai báo biến ARG nhận từ lệnh "docker build --build-arg"
ARG ENV_MODE=staging

# 2. Truyền biến môi trường vào quá trình build
ENV VITE_APP_ENV=$ENV_MODE

# 3. Chạy lệnh build theo mode tương ứng
RUN npm run build -- --mode $ENV_MODE

# Stage 2: Nginx Serve static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]