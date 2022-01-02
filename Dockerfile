FROM node:16.13.1-alpine3.12 as frontend
WORKDIR /frontend
COPY frontend .
RUN npm ci
RUN npm run build

FROM node:16.13.1-alpine3.12
WORKDIR /
COPY server .
COPY --from=frontend /frontend/dist public
ENV ISSUER_BASE_URL=
ENV BASE_URL=
ENV CLIENT_ID=
ENV CLIENT_SECRET=
ENV SECRET=
RUN npm ci
EXPOSE 3000
CMD [ "npm", "run", "start" ]

