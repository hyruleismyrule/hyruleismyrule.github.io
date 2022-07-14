# This is a hangman game
# Import the functions from the Draw 2-D library
# so that they can be used in this program.
from draw2d import \
    start_drawing, draw_line, draw_oval, draw_arc, \
    draw_rectangle, draw_polygon, draw_text, finish_drawing
from random import randint

def main():
    guessed_letters = []
    word_display = []
    wrong_guesses = 0
    print()
    print("Welcome to Hangman!")
    print("Type !QUIT! to quit")
    difficulty = input("Pick a difficulty, EASY, MEDIUM, HARD: ")
    word = get_word(difficulty)
    wrong_guesses += handicap(difficulty)
    displayLetters(word, guessed_letters, word_display, wrong_guesses)
   

def handicap(difficulty):
    difficulty = difficulty.lower()
    if difficulty == "hard" or difficulty == "h":
        handicap = 2
    elif difficulty == "medium" or difficulty == "m":
        handicap = 1
    else:
        handicap = 0
    return handicap

def get_word(difficulty):
    difficulty = difficulty.lower()
    if difficulty == "hard" or difficulty == "h":
        word_list_file = "hard.csv"
    elif difficulty == "medium" or difficulty == "m":
        word_list_file = "medium.csv"
    else:
        word_list_file = "easy.csv"
    word_list = read_list("CSE111/W12/" + word_list_file)
    word = word_list[randint(0, len(word_list))]
    return word


def read_list(filename):
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
    word_array = []
    for character in word:
        word_array.append(character)
    return word_array

def displayLetters(word, guessed_letters, word_display, wrong_guesses):
    # If this is the first time displaying the word, it should
    # be blank.
    if len(guessed_letters) == 0:
        for character in word:
            word_display.append("_")
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
    # print(word_display)
    print(temp_display)
    if word_display == word_array(word):
        print("Congrats!")
        quit()
    begin_gessing(word, guessed_letters, word_display, wrong_guesses)

def ask(word, guessed_letters, word_display, wrong_guesses):
    # Ask the user for a letter
    if len(guessed_letters) > 0:
        temp_display = ""
        for letter in guessed_letters:
            temp_display += letter + ", "
        print(f"You have guessed: {temp_display}")
    guess = input("Guess a letter: ")
    return guess
    
def begin_gessing(word, guessed_letters, word_display, wrong_guesses):
    guess = ask(word, guessed_letters, word_display, wrong_guesses)

    if guess.lower() == "!quit!":
        quit()
    elif guess.lower() == word:
        print(word)
        print("Congrats!")
        quit()
    elif len(guess) > 1:
        print("That word is not correct.")
        wrong_guesses += 1
        draw_man(wrong_guesses)
        guessed_letters.append(guess)
        displayLetters(word, guessed_letters, word_display, wrong_guesses)
        ask(word, guessed_letters, word_display, wrong_guesses)
    elif guess.lower() in guessed_letters:
        print(f"You have already guessed {guess.lower()}")
        displayLetters(word, guessed_letters, word_display, wrong_guesses)
        ask(word, guessed_letters, word_display, wrong_guesses)
    else:
        if guess not in word:
            wrong_guesses += 1
            if wrong_guesses == 6:
                print(f"Sorry, the word was {word}")
                print()
                draw_man(wrong_guesses)
                quit()
            else:
                draw_man(wrong_guesses)
        guessed_letters.append(guess)
        displayLetters(word, guessed_letters, word_display, wrong_guesses)
        ask(word, guessed_letters, word_display, wrong_guesses)

def draw_man(wrong_guesses):
    scene_width = 500
    scene_height = 800

    canvas = start_drawing("Scene", scene_width, scene_height)

    def draw_background(canvas, scene_width, scene_height):
        # Draw Sky
        draw_rectangle(canvas, 0, 0, scene_width, scene_height, fill="deepSkyBlue")
        # Draw Ground
        draw_rectangle(canvas, 0, 0, scene_width, 300, fill="green")

    def draw_frame(canvas, scene_width, scene_height):
        # Side
        draw_rectangle(canvas, 400, 200, 450, 650, fill="sienna4")
        # Base
        draw_rectangle(canvas, 50, 150, 450, 200, fill="sienna4")
        # String
        draw_line(canvas, 200, 600, 200, 700)
        # Top
        draw_rectangle(canvas, 150, 700, 450, 650, fill="sienna4")

    def draw_head(canvas, scene_width, scene_height):
        draw_oval(canvas, 150, 500, 250, 600, width=1, outline="black", fill="white")

    def draw_body(canvas, scene_width, scene_height):
        draw_line(canvas, 200, 400, 200, 600, fill="white")

    def draw_left_arm(canvas, scene_width, scene_height):
        draw_line(canvas, 150, 450, 200, 500, fill="white")

    def draw_right_arm(canvas, scene_width, scene_height):
        draw_line(canvas, 250, 450, 200, 500, fill="white")

    def draw_left_leg(canvas, scene_width, scene_height):
        draw_line(canvas, 150, 350, 200, 400, fill="white")

    def draw_right_leg(canvas, scene_width, scene_height):
        draw_line(canvas, 250, 350, 200, 400, fill="white")
        

    draw_background(canvas, scene_width, scene_height)
    draw_frame(canvas, scene_width, scene_height)

    if wrong_guesses > 0:
        draw_head(canvas, scene_width, scene_height)
    if wrong_guesses > 1:
        draw_body(canvas, scene_width, scene_height)
    if wrong_guesses > 2:
        draw_left_arm(canvas, scene_width, scene_height)
    if wrong_guesses > 3:
        draw_right_arm(canvas, scene_width, scene_height)
    if wrong_guesses > 4:
        draw_left_leg(canvas, scene_width, scene_height)
    if wrong_guesses > 5:
        draw_right_leg(canvas, scene_width, scene_height)
        

    finish_drawing(canvas)

main()