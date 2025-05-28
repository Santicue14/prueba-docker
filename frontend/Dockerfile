# Imagen base con Node
FROM node:alpine

# Instala servidor http-server
RUN npm install -g http-server

# Carpeta de trabajo
WORKDIR /app

# Copia tu index.html
COPY . .

# Expone el puerto
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["http-server", "-p", "3000"]
