FROM node:12.2.0-alpine as build

WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
ENV NODE_ENV=production

COPY package.json package-lock.json /app/

RUN npm install --silent npm-install-peers

COPY . /app

RUN npm run build

FROM nginx:1.16.0-alpine

ARG VCS_REF
ARG VCS_URL

LABEL org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vcs-url=$VCS_URL

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
# 'deamon off' is required "in order for nginx to stay in the foreground, so that Docker can track the process properly"
CMD ["nginx", "-g", "daemon off;"]