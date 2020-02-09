FROM node:13.8.0-alpine3.11 as react-build

WORKDIR /web

COPY . ./

RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=react-build /web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
