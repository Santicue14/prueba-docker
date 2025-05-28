# Proyecto

Este es un proyecto full-stack que utiliza una arquitectura de microservicios con Docker.

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
├── docker-compose.yml    # Configuración de servicios Docker
├── .gitignore           # Archivos ignorados por Git
└── README.md            # Este archivo
```

## Requisitos

- Docker
- Docker Compose

## Configuración y Ejecución

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd proyecto
```

2. Iniciar los servicios con Docker Compose:
```bash
docker-compose up
```

## Servicios

### Backend
- Servidor Node.js
- Expuesto en el puerto 3000

### Frontend
- Aplicación web estática
- Expuesta en el puerto 80

## Desarrollo

Para desarrollo local, puedes ejecutar los servicios por separado:

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
