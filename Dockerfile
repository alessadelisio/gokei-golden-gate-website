FROM python:3.10-slim

ARG UNSPLASH_ACCESS_KEY
ARG UNSPLASH_API_URL

ENV PYTHONUNBUFFERED True
ENV UNSPLASH_ACCESS_KEY=$UNSPLASH_ACCESS_KEY
ENV UNSPLASH_API_URL=$UNSPLASH_API_URL

WORKDIR /app

RUN pip install pipenv

COPY Pipfile Pipfile.lock ./

RUN pipenv install --system --deploy

COPY . .

CMD gunicorn --workers=1 --bind=0.0.0.0:8080 --log-level DEBUG --threads 8 --timeout 0 src.app:app --reload
