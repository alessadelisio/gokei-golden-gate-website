# pylint: disable=C0114, C0115, C0116
def dummy_func(x):
    return x**2


class TestDummy: # pylint: disable=R0903
    def test_dummy(self):
        assert dummy_func(7) == 49
