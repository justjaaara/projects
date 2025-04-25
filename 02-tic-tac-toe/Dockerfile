# Usar una imagen base de Node.js (Vite requiere Node.js)
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración del proyecto
COPY package.json yarn.lock* package-lock.json* ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto en el que correrá la aplicación
EXPOSE 4173

# Comando para servir la aplicación construida
CMD ["npm", "run", "preview", "--", "--host"]