FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /var/www/mo2front/