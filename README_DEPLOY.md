# Despliegue local con Docker Compose + CI

## 1) Estructura
- `backend/Dockerfile` — Django + Gunicorn
- `frontend/Dockerfile` — Angular + Nginx
- `nginx.conf` — proxy para `/api`
- `docker-compose.yml` — orquesta backend, frontend y proxy
- `.env.sample` — variables base
- `.github/workflows` — CI de backend y frontend

## 2) Uso local
```bash
cp .env.sample .env
docker compose build
docker compose up
# abre http://localhost:8080
