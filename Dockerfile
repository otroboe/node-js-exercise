FROM node:alpine

WORKDIR /usr/src/app

# App deps
COPY . /usr/src/app
RUN npm install
RUN npm run build
RUN npm prune --production

# Create the .env file
COPY ./.env.production /usr/src/app/.env

# Symlink the data
RUN ln -s /usr/src/app/src/data /usr/src/app/dist/data

# Expose the port
EXPOSE 3000

CMD [ "npm", "run", "serve" ]
