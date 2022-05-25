from sentences import get_determiner, get_noun, get_verb, get_preposition, get_prepositional_phrase
import random
import pytest


def test_get_determiner():
    # 1. Test the single determiners.

    single_determiners = ["a", "one", "the"]

    # This loop will repeat the statements inside it 4 times.
    # If a loop's counting variable is not used inside the
    # body of the loop, many programmers will use underscore
    # (_) as the variable name for the counting variable.
    for _ in range(4):

        # Call the get_determiner function which
        # should return a single determiner.
        word = get_determiner(1)

        # Verify that the word returned from get_determiner
        # is one of the words in the single_determiners list.
        assert word in single_determiners

    # 2. Test the plural determiners.

    plural_determiners = ["two", "some", "many", "the"]

    # This loop will repeat the statements inside it 4 times.
    for _ in range(4):

        # Call the get_determiner function which
        # should return a plural determiner.
        word = get_determiner(2)

        # Verify that the word returned from get_determiner
        # is one of the words in the plural_determiners list.
        assert word in plural_determiners

def test_get_noun():
    # 1. Test the single noun.
    single_noun = ["bird", "boy", "car", "cat", "child", "dog", "girl", "man", "rabbit", "woman"]

    for _ in range(4):
        word = get_noun(1)

        assert word in single_noun

    # 2. Test the plural nouns.
    plural_nouns = ["birds", "boys", "cars", "cats", "children","dogs", "girls", "men", "rabbits", "women"]

    for _ in range(4):

        word = get_noun(2)

        assert word in plural_nouns

def test_get_verb():
    # 1. Test the past verb.
    past_verb = ["drank", "ate", "grew", "laughed", "thought", "ran", "slept", "talked", "walked", "wrote"]

    for _ in range(4):
        word = get_verb(1, "past")

        assert word in past_verb

    # 2. Test present plural verb
    present_single_verb = ["drinks", "eats", "grows", "laughs", "thinks", "runs", "sleeps", "talks", "walks", "writes"]
    for _ in range(4):
        word = get_verb(1, "present")

        assert word in present_single_verb

    # 3. Test present plural verb.
    present_plural_verb = ["drink", "eat", "grow", "laugh", "think", "run", "sleep", "talk", "walk", "write"]

    for _ in range(4):
        word = get_verb(2, "present")

        assert word in present_plural_verb

    # 4. Test future verb
    future_verb = ["will drink", "will eat", "will grow", "will laugh", "will think", "will run", "will sleep", "will talk", "will walk", "will write"]

    for _ in range(4):
        word = get_verb(2, "future")

        assert word in future_verb

def test_get_preposition():
    word = get_preposition()

    prepositions = ["about", "above", "across", "after", "along",
        "around", "at", "before", "behind", "below",
        "beyond", "by", "despite", "except", "for",
        "from", "in", "into", "near", "of",
        "off", "on", "onto", "out", "over",
        "past", "to", "under", "with", "without"]

    assert word in prepositions

def test_get_prepositional_phrase():
    # Test single
    string = get_prepositional_phrase(1)
    words = string.split()

    assert len(words) == 3

    prepositions = ["about", "above", "across", "after", "along",
        "around", "at", "before", "behind", "below",
        "beyond", "by", "despite", "except", "for",
        "from", "in", "into", "near", "of",
        "off", "on", "onto", "out", "over",
        "past", "to", "under", "with", "without"]

    determiners = ["a", "one", "the"]

    nouns = ["bird", "boy", "car", "cat", "child", "dog", "girl", "man", "rabbit", "woman"]

    preposition_word = words[0]
    determiner_word = words[1]
    noun_word = words[2]

    assert preposition_word in prepositions
    assert determiner_word in determiners
    assert noun_word in nouns

    # Test plural
    string = get_prepositional_phrase(2)
    words = string.split()

    assert len(words) == 3

    determiners = ["two", "some", "many", "the"]

    nouns = ["birds", "boys", "cars", "cats", "children","dogs", "girls", "men", "rabbits", "women"]

# Call the main function that is part of pytest so that the
# computer will execute the test functions in this file.
pytest.main(["-v", "--tb=line", "-rN", __file__])