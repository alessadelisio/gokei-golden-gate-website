import logging
import os
import sys
from typing import ClassVar

from colorama import Back, Fore, Style
from dotenv import load_dotenv

load_dotenv()

UNSPLASH_ACCESS_KEY = os.getenv("UNSPLASH_ACCESS_KEY")
UNSPLASH_API_URL = "https://api.unsplash.com/search/photos"

if not UNSPLASH_ACCESS_KEY:
    raise ValueError("UNSPLASH_ACCESS_KEY is not set in the environment variables")


class ColoredFormatter(logging.Formatter):
    """Custom Formatter class for colored log messages."""

    COLORS: ClassVar[dict] = {
        "DEBUG": Fore.CYAN,
        "INFO": Fore.GREEN,
        "WARNING": Fore.YELLOW,
        "ERROR": Fore.RED,
        "CRITICAL": Fore.WHITE + Back.RED + Style.BRIGHT,
    }

    def format(self, record):  # noqa: A003
        """Format the specified record as a colored log message.

        Args:
            record (logging.LogRecord): The log record to be formatted.

        Returns:
            str: The formatted log message with color codes.
        """
        color = self.COLORS.get(record.levelname, "")
        message = super().format(record)

        return f"{color}{message}{Style.RESET_ALL}"


def setup_logger() -> logging.Logger:
    """This function sets up a custom logger.

    Returns:
    - logging.Logger: The custom logger object."""

    logger = logging.getLogger(__name__)
    logger.setLevel(logging.DEBUG)

    # Removing any existing handlers
    logger.handlers.clear()

    # Creating a console handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(logging.DEBUG)

    # Formatting the log messages
    formatter = ColoredFormatter(
        fmt="[%(asctime)s] [%(levelname)s] - %(message)s", datefmt="%d-%b-%y %H:%M:%S"
    )

    # Adding the formatter to the console handler
    console_handler.setFormatter(formatter)

    # Adding the console handler to the logger
    logger.addHandler(console_handler)

    return logger


logger = setup_logger()
