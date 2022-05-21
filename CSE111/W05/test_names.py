from names import make_full_name, \
    extract_family_name, extract_given_name
import pytest


def test_make_full_name():
    full_name = make_full_name("Sally", "Brown")
    assert full_name == "Brown; Sally"

def test_extract_family_name():
    family_name = extract_family_name("Brown; Sally")
    assert family_name == "Brown"

def test_extract_given_name():
    given_name = extract_given_name("Brown; Sally")
    assert given_name == "Sally"

def main():
    test_make_full_name()
    test_extract_family_name()
    test_extract_given_name()

# Call the main function that is part of pytest so that the
# computer will execute the test functions in this file.
pytest.main(["-v", "--tb=line", "-rN", __file__])
