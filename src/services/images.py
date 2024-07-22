from typing import Any

import requests

from src.config import UNSPLASH_ACCESS_KEY, UNSPLASH_API_URL, logger


def fetch_images(page: int = 1, per_page: int = 30) -> list[dict[str, Any]]:
    """This function fetches images from the Golden Gate bridge in the Unsplash
    API, by sending a request, processing the response, and returning a list of
    dictionaries containing image details.

    Returns:
    - list[dict[str, Any]]: A list of dictionaries, each containing details of an
    image (url, alt text, tags, and author information).

    Raises:
    - Exception: If there's an error fetching images from the API or processing
    the response."""

    logger.info("Fetching Golden Gate Bridge images from Unsplash...")

    params = {
        "query": "Golden Gate Bridge",
        "page": page,
        "per_page": per_page,
        "client_id": UNSPLASH_ACCESS_KEY,
    }

    try:
        response = requests.get(UNSPLASH_API_URL, params=params)
        logger.debug(f"Unsplash API response status code: {response.status_code}")

        response.raise_for_status()

        data = response.json()
        logger.info(f"Successfully fetched {len(data['results'])} images.")

        images = [
            {
                "url": item["urls"]["regular"],
                "alt": item["alt_description"],
                "tags": [tag["title"] for tag in item.get("tags", [])],
                "author": {
                    "name": item["user"]["name"],
                    "username": item["user"]["username"],
                    "profile_image": item["user"]["profile_image"]["medium"],
                    "twitter_username": item["user"]["twitter_username"],
                },
            }
            for item in data["results"]
        ]

        logger.debug(f"Processed {len(images)} images")

        return images

    except requests.RequestException as error:
        logger.error(f"Failed to fetch images: {str(error)}")
        raise Exception("Failed to fetch images.") from error

    except (KeyError, TypeError) as error:
        logger.error(f"Error processing response data: {str(error)}")
        raise Exception("Error processing image data.") from error
