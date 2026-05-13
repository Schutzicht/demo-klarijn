FROM node:22-alpine AS builder

WORKDIR /opt/app

# System deps (Strapi-admin build heeft soms native deps)
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm vips-dev git

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN NODE_ENV=production npm run build

# ---------- Runtime ----------
FROM node:22-alpine AS runtime

WORKDIR /opt/app
RUN apk add --no-cache vips-dev tini

# Niet als root draaien in productie
RUN addgroup -g 1001 strapi && adduser -D -u 1001 -G strapi strapi

COPY --from=builder --chown=strapi:strapi /opt/app .

# Strapi vereist dat deze folder bestaat; volume overschrijft 'm tijdens runtime
RUN mkdir -p /opt/app/public/uploads && chown -R strapi:strapi /opt/app/public

USER strapi

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=1337

EXPOSE 1337

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "run", "start"]
