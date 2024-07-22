from typing import Union

from flask import Blueprint, jsonify, render_template, request

from src.services.images import fetch_images

router = Blueprint("gallery", __name__)


@router.route("/")
def index() -> str:
    """This function renders the index page of the gallery.

    Returns:
        str: Rendered HTML content of the index page."""

    return render_template("index.html")


@router.route("/get_images")
def get_images() -> Union[str, tuple[str, int]]:
    """This function fetches and returns images from the Unsplash API.

    Returns:
    - Union[str, tuple[str, int]]: A JSON string of images if successful,
    or a tuple of an error message and status code if an error occurs."""

    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 30, type=int)
        images = fetch_images(page=page, per_page=per_page)

        return jsonify(images)

    except Exception as error:
        return jsonify({"error": str(error)}), 500
