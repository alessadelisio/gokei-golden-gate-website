FROM python:3.10-slim

ENV PYTHONUNBUFFERED True

WORKDIR /app

RUN pip install pipenv

COPY Pipfile Pipfile.lock ./

RUN pipenv install --system --deploy

COPY . .

CMD gunicorn --workers=1 --bind=0.0.0.0:8080 --log-level DEBUG --threads 8 --timeout 0 src.app:app --reload
