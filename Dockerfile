FROM nginx
COPY dist/fuse /usr/share/nginx/html
COPY conf/default.conf /etc/nginx/conf.d/default.conf

