# Imagen base con Node
FROM node:alpine

# Carpeta de trabajo
WORKDIR /app

# Copia tu index.html
COPY . .

# Instala servidor http-server
RUN npm install -g http-server

# Expone el puerto
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["http-server", "-p", "3000"]
