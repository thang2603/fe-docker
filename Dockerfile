FROM node:20-alpine AS build
WORKDIR /app

# Bật pnpm có sẵn trong Node.js qua corepack
RUN corepack enable && corepack prepare pnpm@10.20.0 --activate

# Copy file cấu hình dependency
COPY package.json pnpm-lock.yaml ./

# Cài đặt thư viện bằng pnpm
RUN pnpm install --frozen-lockfile

COPY . .

ARG ENV_MODE=staging
RUN pnpm run build --mode $ENV_MODE

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]