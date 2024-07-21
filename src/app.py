"""Main website's app, wrapping all its necessary routes."""

from flask import Flask

from src.routes.gallery import router as gallery_router
from src.routes.health import router as health_router


def create_app():
    app = Flask(__name__)

    app.register_blueprint(health_router)
    app.register_blueprint(gallery_router)

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)
