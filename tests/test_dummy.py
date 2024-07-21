def dummy_func(x):
    """Compute the square of x."""
    return x ** 2


class TestDummy:
    """Test suite for dummy_func."""

    def test_dummy(self):
        """Test if dummy_func correctly computes the square of a number."""
        expected_result = 49  # Replace magic value with a named constant
        assert dummy_func(7) == expected_result
