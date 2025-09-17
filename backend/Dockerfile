# Backend: Django + Gunicorn
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

COPY requirements_modern.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt gunicorn

COPY . /app

ENV DJANGO_SETTINGS_MODULE=api_crud.settings \
    TIME_ZONE=America/Lima \
    DEBUG=0

EXPOSE 8000
CMD ["gunicorn", "api_crud.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
