FROM node:12.20.2 as node

# Indicar el directorio donde trabajará
WORKDIR /app

# Copiar los archivos del proyecto a la carpeta de la app
COPY ./ /app/

# Instalar las dependencias descritas en el package.json
RUN npm install

# Establecer varibale configuración del entorno en producción
#ARG configuration=production

# Realizar build del proyecto para producción
RUN npm run build
# --prod --configuration=$configuration --aot=true --build-optimizer=true

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# Imagen de nginx para montar el compilado
FROM nginx:1.19.8-alpine

# Copiar el compilado del proyecto hacia la ruta del servidor
COPY /dist/vex /usr/share/nginx/html

EXPOSE 80