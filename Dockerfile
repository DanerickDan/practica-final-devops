# Usar una imagen base de Nginx
FROM nginx:alpine

# Copiar el archivo HTML al contenedor
COPY index.html /usr/share/nginx/html/index.html
