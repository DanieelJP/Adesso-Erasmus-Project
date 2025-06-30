FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Copia el archivo de entorno adecuado. Por defecto, usa env.text (localhost)
# Para entorno Docker puro, cambia a COPY env.docker .env
COPY env.text .env

EXPOSE 3000

CMD ["npm", "start"]

