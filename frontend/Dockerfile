# Frontend: Angular build -> Nginx
FROM node:20-alpine AS build
WORKDIR /app

# Copia manifest y bloquea versiones
COPY package*.json ./

# Instala dependencias incluyendo devDependencies (CLI local)
RUN npm ci || npm install

# (Arreglo robusto) Instala CLI global con la misma major del proyecto
# Si tu Angular es 17: usa @angular/cli@17 ; si es 18: @angular/cli@18
RUN npm i -g @angular/cli@17

# Copia el código fuente
COPY . .

# Diagnóstico opcional (puedes comentar estas 2 líneas luego)
RUN node -v && npm -v && ng version

# Compila usando el CLI (global) y fuerza salida a /app/dist
RUN ng build --configuration production --output-path=dist

# Etapa Nginx
FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
# nginx.conf lo montamos por docker-compose
