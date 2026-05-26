# Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.html ./
COPY vite.config.js ./
COPY src ./src
COPY public ./public

RUN npm run build

# Producción
FROM nginx:alpine

# Crear usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /app/dist /usr/share/nginx/html

# Dar permisos al usuario
RUN chown -R appuser:appgroup /usr/share/nginx/html

EXPOSE 80

USER appuser

CMD ["nginx", "-g", "daemon off;"]