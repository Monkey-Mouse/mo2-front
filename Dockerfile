FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=front dist /var/www/mo2front/