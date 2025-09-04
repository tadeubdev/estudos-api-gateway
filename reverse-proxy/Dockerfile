FROM openresty/openresty:1.25.3.1-0-alpine
RUN apk add --no-cache lua-resty-http lua-resty-jwt lua-resty-string
COPY nginx.conf /etc/nginx/conf.d/default.conf
