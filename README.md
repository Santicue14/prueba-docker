# Proyecto

Este es un proyecto full-stack que utiliza una arquitectura de microservicios con Docker y Nginx como reverse proxy.

## Estructura del Proyecto

```
.
├── backend/               # Servidor backend
│   ├── server.js         # Punto de entrada del servidor
│   └── Dockerfile        # Configuración de Docker para el backend
│
├── frontend/             # Aplicación frontend
│   ├── index.html       # Página principal
│   └── Dockerfile       # Configuración de Docker para el frontend
│
├── nginx/               # Reverse proxy
│   ├── default.conf     # Configuración de Nginx
│   ├── nginx.conf       # Configuración base de Nginx
│   └── Dockerfile       # Configuración de Docker para Nginx
│
├── .gitignore           # Archivos ignorados por Git
└── README.md            # Este archivo
```

## Requisitos

- Docker

## Configuración y Ejecución

### 1. Crear una red Docker personalizada

Primero, crea una red Docker para que los contenedores puedan comunicarse entre sí:

```bash
docker network create mi-red
```

### 2. Compilar las imágenes Docker

#### Backend
```bash
cd backend
docker build -t mi-backend .
cd ..
```

#### Frontend
```bash
cd frontend
docker build -t mi-frontend .
cd ..
```

#### Nginx (Reverse Proxy)
```bash
cd nginx
docker build -t mi-nginx .
cd ..
```

### 3. Ejecutar los contenedores

#### Ejecutar Backend (API)
```bash
# Primera instancia de la API (api1)
docker run -d --name api1 --network mi-red -p 4001:4000 mi-backend

# Segunda instancia de la API (api2) para balanceo de carga
docker run -d --name api2 --network mi-red -p 4002:4000 mi-backend
```

#### Ejecutar Frontend
```bash
docker run -d --name frontend --network mi-red -p 3001:3000 mi-frontend
```

#### Ejecutar Nginx (Reverse Proxy)
```bash
docker run -d --name nginx --network mi-red -p 3000:3000 mi-nginx
```

## Servicios

### Backend
- Servidor Node.js
- Dos instancias corriendo en los puertos 4001 y 4002 (mapeados internamente al 4000)
- Balanceo de carga manejado por Nginx

### Frontend
- Aplicación web estática
- Expuesta en el puerto 3001 (mapeado internamente al 3000)

### Nginx
- Reverse proxy y balanceador de carga
- Expuesto en el puerto 3000
- Redirige las peticiones `/api/` al backend
- Redirige las peticiones `/` al frontend

## Acceso a la Aplicación

Una vez que todos los contenedores estén ejecutándose:

- **Aplicación completa**: http://localhost:3000
- **Solo Frontend**: http://localhost:3001
- **API directa (instancia 1)**: http://localhost:4001
- **API directa (instancia 2)**: http://localhost:4002

## Comandos Útiles

### Ver contenedores en ejecución
```bash
docker ps
```

### Detener todos los contenedores
```bash
docker stop nginx frontend api1 api2
```

### Eliminar todos los contenedores
```bash
docker rm nginx frontend api1 api2
```

### Eliminar la red personalizada
```bash
docker network rm mi-red
```

### Ver logs de un contenedor
```bash
docker logs <nombre-del-contenedor>
```

## Desarrollo

Para desarrollo local sin Docker, puedes ejecutar los servicios por separado:

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
# Abrir index.html en un navegador
```