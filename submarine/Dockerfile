FROM node:14.16.0 as node
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY ./ /app/
# use build_prod for production, build_qa for qa
RUN npm run prodbuild
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13
COPY --from=node /app/dist/apps/recruiter /usr/share/nginx/html
# COPY --from=node /app/sitemap.xml /usr/share/nginx/html
# COPY --from=node /app/robots.txt /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf