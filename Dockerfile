FROM arm64v8/node:16.14-slim

WORKDIR /app
COPY . .
CMD node .
