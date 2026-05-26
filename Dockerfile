
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install


RUN npm run build


FROM nginx:alpine


RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /app/dist /usr/share/nginx/html

RUN chown -R appuser:appgroup /usr/share/nginx/html

EXPOSE 80

USER appuser

CMD ["nginx", "-g", "daemon off;"]