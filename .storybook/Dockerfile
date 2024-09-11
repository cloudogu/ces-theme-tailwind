FROM alpine:3.20

LABEL NAME="ecosystem.cloudogu.com/ces-theme-tailwind" \
      VERSION="0.7.1"

# install required packages
RUN set -x \
    && apk update \
    && apk --update add openssl pcre zlib nginx bash yarn

# build
RUN mkdir -p /build/ces-theme-tailwind
WORKDIR /build/ces-theme-tailwind
ADD . .
RUN  yarn install \
 && mkdir -p /var/www/html/website \
    # build storybook
 && yarn build-storybook -o /var/www/html/website/public \
    #cleanup
 && rm -rf /build


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
