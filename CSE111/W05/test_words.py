"""Verify that the prefix and suffix functions work correctly."""

from words import prefix, suffix
import pytest


def test_prefix():
    """Verify that the prefix function works correctly.
    Parameters: none
    Return: nothing
    """
    pre = prefix("upbeat", "upgrade")
    assert isinstance(pre, str), "prefix function must return a string"

    assert prefix("cat", "catalog") == "cat"
    assert prefix("", "") == ""
    assert prefix("", "correct") == ""
    assert prefix("clear", "") == ""
    assert prefix("happy", "funny") == ""
    assert prefix("cat", "catalog") == "cat"
    assert prefix("dogmatic", "dog") == "dog"
    assert prefix("jump", "joyous") == "j"
    assert prefix("upbeat", "upgrade") == "up"
    assert prefix("Disable", "dIstasteful") == "dis"


def test_sufix():
    """Verify that the sufix function works correctly.
    Parameters: none
    Return: nothing
    """

    suf = suffix("tired", "fatigued")
    assert isinstance(suf, str), "suffix function must return a string"

    assert suffix("", "") == ""
    assert suffix("", "correct") == ""
    assert suffix("clear", "") == ""
    assert suffix("angelic", "awesome") == ""
    assert suffix("found", "profound") == "found"
    assert suffix("ditch", "itch") == "itch"
    assert suffix("happy", "funny") == "y"
    assert suffix("tired", "fatigued") == "ed"
    assert suffix("swimming", "FLYING") == "ing"


# Call the main function that is part of pytest so that the
# computer will execute the test functions in this file.
pytest.main(["-v", "--tb=line", "-rN", __file__])
