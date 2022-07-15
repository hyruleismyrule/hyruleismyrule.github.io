# ***********************************
# Test functions for my HANGMAN GAME
# ***********************************
# Please note:
# I can't test these functions because they don't return anything.
# Thier purpose is to print information to the screen, draw, or call other functions
# display_letters, ask, begin_gessing, and draw_man
# -----------------------------------

from hangman import handicap, get_word, read_list, word_array

import pytest
import os

def test_handicap():
    """Tests the handicap function"""

    # Check hard difficulty
    difficulty = "hard"
    assert handicap(difficulty) == 2

    # Check medium difficulty
    difficulty = "medium"
    assert handicap(difficulty) == 1

    # Check easy
    difficulty = "easy"
    assert handicap(difficulty) == 0

    # Check other (should default to easy)
    difficulty = "smile"
    assert handicap(difficulty) == 0


def test_get_word():
    """Tests the get_word function"""

    # Check hard difficulty
    difficulty = "hard"
    word = get_word(difficulty)
    hard_list = ['whatever', 'buddy', 'sip', 'chicken coop', 'blur', 'chime', 'bleach', 'clay', 'blossom', 'cog', 'twitterpated', 'wish', 'through', 'feudalism', 'whiplash', 'cot', 'blueprint', 'beanstalk', 'think', 'cardboard', 'darts', 'inn', 'Zen', "crow's nest", 'BFF', 'sheriff', 'tiptop', 'dot', 'bob', 'garden hose', 'blimp', 'dress shirt', 'reimbursement', 'capitalism', 'step-daughter', 'applause', 'jig', 'jade', 'blunt', 'application', 'rag', 'squint', 'intern', "sow's ear", 'brainstorm', 'sling', 'half', 'pinch', 'leak', 'skating rink', 'jog', "jammin'", 'shrink ray', 'dent', 'scoundrel', 'escalator', 'cell phone charger', 'kitchen knife set', 'sequins', 'ladder rung', 'flu', 'scuff mark', 'mast', 'sash', 'modern', 'ginger', 'clockwork', 'mess', 'mascot', 'runt', 'chain', 'scar tissue', 'suntan', 'pomp', 'scramble', 'sentence', 'first mate', 'cuff', 'cuticle', 'fortnight', 'riddle', 'spool', 'full moon', 'forever', 'rut', 'hem', 'new', 'freight train', 'diver', 'fringe', 'humidifier', 'handwriting', 'dawn', 'dimple', 'gray hairs', 'hedge', 'plank', 'race', 'publisher', 'fizz', 'gem', 'ditch', 'wool', 'laid', 'fancy', 'ebony and ivory', 'feast', "Murphy's Law", 'billboard', 'flush', 'inconceivable', 'tide', 'midsummer', 'population', 'my', 'elm', 'organ', 'flannel', 'hatch', 'booth']
    assert word in hard_list

    # Check medium difficulty
    difficulty = "medium"
    word = get_word(difficulty)
    medium_list = ['taxi cab', 'standing ovation', 'alarm clock', 'tool', 'banana peel', 'flagpole', 'money', 'wallet', 'ballpoint pen', 'sunburn', 'wedding ring', 'spy', 'baby-sitter', 'aunt', 'acne', 'bib', 'puzzle piece', 'pawn', 'astronaut', 'tennis shoes', 'blue jeans', 'twig', 'outer space', 'banister', 'batteries', 'doghouse', 'campsite', 'plumber', 'bedbug', 'throne', 'tiptoe', 'log', 'mute', 'pogo stick', 'stoplight', 'ceiling fan', 'bedspread', 'bite', 'stove', 'windmill', 'nightmare', 'stripe', 'spring', 'wristwatch', 'eat', 'matchstick', 'gumball', 'bobsled', 'bonnet', 'flock', 'sprinkler', 'living room', 'laugh', 'snuggle', 'sneeze', 'bud', 'elf', 'headache', 'slam dunk', 'internet', 'saddle', 'ironing board', 'bathroom scale', 'kiss', 'shopping cart', 'shipwreck', 'funny', 'glide', 'lamp', 'candlestick', 'grandfather', 'rocket', 'home movies', 'seesaw', 'rollerblades', 'smog', 'grill', 'goblin', 'coach', 'claw', 'cloud', 'shelf', 'recycle', 'glue stick', 'Christmas carolers', 'front porch', 'earache', 'robot', 'foil', 'rib', 'robe', 'crumb', 'paperback', 'hurdle', 'rattle', 'fetch', 'date', 'iPod', 'dance', 'cello', 'flute', 'dock', 'prize', 'dollar', 'puppet', 'brass', 'firefighter', 'huddle', 'easel', 'pigpen', 'bunk bed', 'bowtie', 'fiddle', 'dentist', 'baseboards', 'letter opener', 'photographer', 'magic', 'Old Spice', 'monster']
    assert word in medium_list

    # Check easy difficulty
    difficulty = "easy"
    word = get_word(difficulty)
    easy_list = ['tuba', 'singer', 'race', 'candy', 'student', 'day', 'jump', 'hurt', 'laundry', 'blue', 'sad', 'old', 'guitar', 'athlete', 'night', 'knee', 'wedding', 'bat', 'buy', 'trash can', 'freckle', 'stream', 'quiet', 'mop', 'swing', 'radio', 'square', 'Monday', 'school bus', 'poem', 'scared', 'draw', 'type', 'short', 'stairs', 'asleep', 'motorcycle', 'lunch', 'fog', 'new', 'straw', 'push', 'dirty', 'girl', 'helicopter', 'playground', 'tiger', 'tornado', 'lime', 'leg', 'salt', 'ankle', 'cake', 'shoelace', 'wheelchair', 'goodbye', 'worm', 'eyebrow', 'lion', 'pear', 'talk', 'glasses', 'shirt', 'spoon', 'box', 'wind', 'green', 'wolf', 'snow', 'couch', 'fix', 'flashlight', 'princess', 'broken', 'dictionary', 'plate', 'neighbor', 'roller coaster', 'bridge', 'mailbox', 'flower', 'white', 'sandcastle', 'triangle', 'thunder', 'monster', 'long', 'lizard', 'cafeteria', 'music', 'fire engine', 'star', 'cook', 'tired', 'slow', 'outer space', 'brave', 'horse', 'niece', 'elephant', 'tractor', 'elevator', 'light bulb', 'broccoli', 'cough', 'heart', 'calculator', 'stick,ca', 'tree house', 'watermelon', 'chocolate', 'bird', 'fast', 'hungry', 'red', 'frown', 'chew', 'pepper', 'sick']
    assert word in easy_list

    # Check other (should default to easy)
    difficulty = "smile"
    word = get_word(difficulty)
    easy_list = ['tuba', 'singer', 'race', 'candy', 'student', 'day', 'jump', 'hurt', 'laundry', 'blue', 'sad', 'old', 'guitar', 'athlete', 'night', 'knee', 'wedding', 'bat', 'buy', 'trash can', 'freckle', 'stream', 'quiet', 'mop', 'swing', 'radio', 'square', 'Monday', 'school bus', 'poem', 'scared', 'draw', 'type', 'short', 'stairs', 'asleep', 'motorcycle', 'lunch', 'fog', 'new', 'straw', 'push', 'dirty', 'girl', 'helicopter', 'playground', 'tiger', 'tornado', 'lime', 'leg', 'salt', 'ankle', 'cake', 'shoelace', 'wheelchair', 'goodbye', 'worm', 'eyebrow', 'lion', 'pear', 'talk', 'glasses', 'shirt', 'spoon', 'box', 'wind', 'green', 'wolf', 'snow', 'couch', 'fix', 'flashlight', 'princess', 'broken', 'dictionary', 'plate', 'neighbor', 'roller coaster', 'bridge', 'mailbox', 'flower', 'white', 'sandcastle', 'triangle', 'thunder', 'monster', 'long', 'lizard', 'cafeteria', 'music', 'fire engine', 'star', 'cook', 'tired', 'slow', 'outer space', 'brave', 'horse', 'niece', 'elephant', 'tractor', 'elevator', 'light bulb', 'broccoli', 'cough', 'heart', 'calculator', 'stick,ca', 'tree house', 'watermelon', 'chocolate', 'bird', 'fast', 'hungry', 'red', 'frown', 'chew', 'pepper', 'sick']
    assert word in easy_list



def test_read_list():
    """Tests the read_list function"""

    # I modified this function from the test function example page

    # Write a sample file with three lines
    filename = "lines.txt"
    write_lines = ["first,", "second,", "third,"]
    with open(filename, "wt") as outfile:
        print(*write_lines, sep="\n", file=outfile)

    # Call read_file to read the sample file.
    read = read_list(filename)

    # Delete the lines.txt file.
    os.remove(filename)

    # Verify that read_file read the file correctly.
    read_lines = ["first", "second", "third"]
    assert read == read_lines
    
def test_word_array():
    """Tests the word_array function"""

    word = "bananna"
    bananna_array = ["b", "a", "n", "a", "n", "n", "a"]
    assert bananna_array == word_array(word)



pytest.main(["-v", "--tb=line", "-rN", __file__])