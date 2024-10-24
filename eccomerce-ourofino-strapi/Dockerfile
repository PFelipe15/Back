FROM node:18  
# Installing libvips-dev for sharp Compatibility
RUN apt-get update && apt-get install -y build-essential libvips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Instalar Yarn com --force
RUN npm install -g yarn --force
WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn add esbuild
RUN yarn add node-gyp 

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
RUN rm -rf node_modules package-lock.json  
RUN yarn config set network-timeout 600000 -g && yarn install

RUN yarn add @swc/core-linux-x64-gnu
RUN yarn install   # Usar Yarn em vez de NPM
RUN yarn upgrade esbuild
USER node
EXPOSE 1337
CMD ["yarn", "develop"]