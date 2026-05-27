# Frontend - Despacho Dashboard

Aplicación web desarrollada con React y Vite para gestionar despachos y ventas de Innovatech Chile.

## Tecnologías utilizadas
- React 18
- Vite
- Tailwind CSS
- Axios
- Docker + Nginx
- GitHub Actions (CI/CD)

## Requisitos previos
- Node.js 18+
- Docker y Docker Compose instalados

## Cómo ejecutar el proyecto

### Con Docker Compose
```bash
docker-compose up -d
```

### En desarrollo local
```bash
npm install
npm run dev
```

## Variables de configuración
Las URLs del backend están configuradas en:
- `src/componentes/CrudAdmin/TableCompras.jsx` → apunta a back-ventas
- `src/componentes/CrudAdmin/TableDespachos.jsx` → apunta a back-despachos
- `src/componentes/CrudAdmin/FormDespacho.jsx` → apunta a ambos backends

## Funcionalidades
- Consultar órdenes de compra desde back-ventas
- Generar despachos hacia back-despachos
- Revisar y cerrar órdenes de despacho

## Pipeline CI/CD
El pipeline se activa automáticamente al hacer push en la rama `deploy` y realiza:
1. Build de la imagen Docker
2. Push a Docker Hub
3. Deploy automático en EC2
