FROM node:14-alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dev

FROM nginx
EXPOSE 3000
COPY --from=builder /app/build /usr/share/nginx/html