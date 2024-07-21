from flask import Flask, render_template

from src.routes.health import router as health_router

app = Flask(__name__)

app.register_blueprint(health_router)


@app.route("/")
def index(): # noqa: D103
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
