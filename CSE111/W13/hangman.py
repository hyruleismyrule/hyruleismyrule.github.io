# ***********************
# HANGMAN GAME
# ***********************
# created by Cynthia Rawlings
# Using the Draw 2-D library provided by BYUI earlier in the semester
# I commented out line 44 in the draw2d file so I could call the functions there more than once.

from draw2d import \
    start_drawing, draw_line, draw_oval, draw_arc, \
    draw_rectangle, draw_polygon, draw_text, finish_drawing

from random import randint

def main():
    """The main function that asks the user for a word difficulty to begin guessing."""

    guessed_letters = []
    word_display = []

    print()
    print("Welcome to Hangman!")
    print("Type !QUIT! to quit")
    print("The harder the difficulty, the more pieces there are starting out.")

    difficulty = input("Pick a difficulty, EASY, MEDIUM, HARD: ")
    difficulty = difficulty.lower()

    word = get_word(difficulty)
    wrong_guesses = handicap(difficulty)

    display_letters(word, guessed_letters, word_display, wrong_guesses)
   

def handicap(difficulty):
    """Sets the handicap based on difficulty chosen."""

    if difficulty == "hard" or difficulty == "h" or difficulty == "ha" or difficulty == "har":
        handicap = 2
    elif difficulty == "medium" or difficulty == "m" or difficulty == "me" or difficulty == "med" or difficulty == "medi" or difficulty == "mediu":
        handicap = 1
    else:
        handicap = 0

    return handicap

def get_word(difficulty):
    """Gets the word based on difficulty chosen."""

    if difficulty == "hard" or difficulty == "h" or difficulty == "ha" or difficulty == "har":
        word_list_file = "hard.csv"
        print("You are starting out with the head and body.")
    elif difficulty == "medium" or difficulty == "m" or difficulty == "me" or difficulty == "med" or difficulty == "medi" or difficulty == "mediu":
        word_list_file = "medium.csv"
        print("You are starting out with the head.")
    else:
        word_list_file = "easy.csv"

    # For some reason I need to include this file path
    word_list = read_list("CSE111/W13/" + word_list_file)
    word = word_list[randint(0, len(word_list))]

    return word


def read_list(filename):
    # This function is reused from a past assignment
    """Read the contents of a text file into a list and
    return the list. Each element in the list will contain
    one line of text from the text file.
    Parameter filename: the name of the text file to read
    Return: a list of strings
    """

    word_list = []

    with open(filename, "rt") as word_file:
        for line in word_file:
            clean_line = line.strip()
            clean_line = clean_line[:-1]
            word_list.append(clean_line)

    return word_list

def word_array(word):
    """This creates an array with each element a character from the word."""

    word_array = []

    for character in word:
        word_array.append(character)

    return word_array

def display_letters(word, guessed_letters, word_display, wrong_guesses):
    """Prints out the word blanks with correct letters filled in. Calls the begin_gessing function."""

    # If this is the first time displaying the word, it should
    # be blank.
    if len(guessed_letters) == 0:
        for character in word:
            # Check for white space
            if character == " ":
                word_display.append(" ")
            else:
                word_display.append("_")
        print()

    else:
        # For the last letter guessed add it to the word_display
        letter = guessed_letters[-1]
        character_index = 0
        for character in word:
            if character == letter:
                word_display[character_index] = letter
            character_index += 1
        guessed_letters.sort()
    
    temp_display = ""

    for letter in word_display:
        temp_display += letter

    print(temp_display)
    print()

    if word_display == word_array(word):
        print("Congrats!")
        quit()

    begin_gessing(word, guessed_letters, word_display, wrong_guesses)

def ask(guessed_letters):
    """Prints out a the list of guessed letters and asks the user to guess 
    another letter. Returns the guessed letter (or word)."""

    # Ask the user for a letter
    if len(guessed_letters) > 0:
        temp_display = ""
        for letter in guessed_letters:
            # check for white space
            if letter == " ":
                temp_display += " "
            else:
                temp_display += letter + ", "
        print(f"You have guessed: {temp_display}")

    guess = input("Guess a letter: ")

    return guess
    
def begin_gessing(word, guessed_letters, word_display, wrong_guesses):
    """Calles the ask function to get the user's guess. Checks the guess
    to see if it is the quit key or the correct word. Checks if the letter
    has already been guessed. If the guess is incorrect the draw_man
    function will be called. The display_letters function is called."""

    guess = ask(guessed_letters)

    if guess.lower() == "!quit!":
        quit()

    elif guess.lower() == word:
        print(word)
        print("Congrats!")
        quit()

    elif len(guess) > 1:
        print("That word is not correct.")
        wrong_guesses += 1
        print("Close the drawing to continue.")
        print()
        draw_man(wrong_guesses)
        guessed_letters.append(guess)
        display_letters(word, guessed_letters, word_display, wrong_guesses)
        ask(guessed_letters)

    elif guess.lower() in guessed_letters:
        print(f"You have already guessed {guess.lower()}")
        display_letters(word, guessed_letters, word_display, wrong_guesses)
        ask(guessed_letters)

    else:
        if guess not in word:
            wrong_guesses += 1
            if wrong_guesses == 6:
                print(f"Sorry, the word was {word}")
                print()
                draw_man(wrong_guesses)
                quit()

            else:
                print("Close the drawing to continue.")
                print()
                draw_man(wrong_guesses)

        guessed_letters.append(guess)

        display_letters(word, guessed_letters, word_display, wrong_guesses)

        ask(guessed_letters)

def draw_man(wrong_guesses):
    """Draws the hangman. The more the incorrect guesses, the more pieces are drawn."""

    scene_width = 500
    scene_height = 800

    canvas = start_drawing("Scene", scene_width, scene_height)

    def draw_background(canvas, scene_width, scene_height):
        # Draw Sky
        draw_rectangle(canvas, 0, 0, scene_width, scene_height, fill="deepSkyBlue")
        # Draw Ground
        draw_rectangle(canvas, 0, 0, scene_width, 300, fill="green")

    def draw_frame(canvas):
        # Side
        draw_rectangle(canvas, 400, 200, 450, 650, fill="sienna4")
        # Base
        draw_rectangle(canvas, 50, 150, 450, 200, fill="sienna4")
        # String
        draw_line(canvas, 200, 600, 200, 700, width=4)
        # Top
        draw_rectangle(canvas, 150, 700, 450, 650, fill="sienna4")

    def draw_head(canvas):
        draw_oval(canvas, 150, 500, 250, 600, width=1, outline="black", fill="white")

    def draw_body(canvas):
        draw_line(canvas, 200, 400, 200, 600, width=8, fill="white")

    def draw_left_arm(canvas):
        draw_line(canvas, 150, 450, 200, 500, width=8, fill="white")

    def draw_right_arm(canvas):
        draw_line(canvas, 250, 450, 200, 500, width=8, fill="white")

    def draw_left_leg(canvas):
        draw_line(canvas, 150, 350, 200, 400, width=8, fill="white")

    def draw_right_leg(canvas):
        draw_line(canvas, 250, 350, 200, 400, width=8, fill="white")
        

    draw_background(canvas, scene_width, scene_height)
    draw_frame(canvas)

    if wrong_guesses > 0:
        draw_head(canvas)
    if wrong_guesses > 1:
        draw_body(canvas)
    if wrong_guesses > 2:
        draw_left_arm(canvas)
    if wrong_guesses > 3:
        draw_right_arm(canvas)
    if wrong_guesses > 4:
        draw_left_leg(canvas)
    if wrong_guesses > 5:
        draw_right_leg(canvas)
        

    finish_drawing(canvas)

if __name__ == "__main__":
    main()