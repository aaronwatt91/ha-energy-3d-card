FROM node:20-alpine

WORKDIR /app

# Copy application files
COPY package.json ./
COPY dist ./dist
COPY src ./src
COPY index.html ./
COPY Taylor_Wimpey_Blair.glb ./
COPY server.js ./

ENV PORT=8099
EXPOSE 8099

CMD ["node", "server.js"]
