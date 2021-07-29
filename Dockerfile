ARG qiniuak
ARG qiniusk

FROM node:16.5 AS front
WORKDIR /home/mo2front
COPY . .
RUN npm install
RUN npm run build
RUN chmod 777 ./qiniu_uploader
ENV qiniuak=$qiniuak
ENV GIN_MODE=release
ENV qiniusk=$qiniusk
RUN ./qiniu_uploader

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY qiniu_uploader /etc/nginx/nginx.conf
COPY --from=front /home/dist /var/www/mo2front/