FROM node:16.5 AS front
WORKDIR /home/mo2front
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=front /home/dist /var/www/mo2front/