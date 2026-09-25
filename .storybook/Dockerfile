FROM node:22-alpine AS build

WORKDIR /build/ces-theme-tailwind
COPY . .
RUN yarn install --frozen-lockfile \
 && yarn build-storybook -o /storybook-static

FROM alpine:3.20

LABEL NAME="ecosystem.cloudogu.com/ces-theme-tailwind" \
      VERSION="1.0.0"

RUN apk add --no-cache openssl pcre zlib nginx bash
COPY --from=build /storybook-static /var/www/html/website/public

# setup nginx
RUN chown root:root /usr/sbin/nginx \
    # redirect logs
 && ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log \
    # cleanup apk cache
 && rm -rf /var/cache/apk/* \
 && mkdir -p /var/www/html/website

# copy nginx config
COPY ./.storybook/nginx.conf /etc/nginx/nginx.conf

WORKDIR /etc/nginx

EXPOSE 8080

CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]
