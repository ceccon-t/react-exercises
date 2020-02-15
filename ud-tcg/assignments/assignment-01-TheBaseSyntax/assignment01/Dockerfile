# Stage 1
FROM node:12.2.0 as react-build

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run-script build

#CMD ["npm", "start"]

# Stage 2
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]