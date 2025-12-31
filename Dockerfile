FROM node:22-alpine

WORKDIR /app


COPY package-lock.json package.json ./

RUN npm install

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

EXPOSE 3000

CMD if [ "$NODE_ENV" = "production" ]; then npm run start; else npm run dev; fi