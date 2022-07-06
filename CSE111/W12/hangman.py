# This is a hangman game
from random import randint

def main():
    guessed_letters = []
    word_display = []
    print()
    print("Welcome to Hangman!")
    print("Type !QUIT! to quit")
    difficulty = input("Pick a difficulty, EASY, MEDIUM, HARD: ")
    # word = get_word(difficulty)
    word = "word"
    print(word)
    displayLetters(word, guessed_letters, word_display)
    # begin_gessing(word, guessed_letters, word_display)

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

def displayLetters(word, guessed_letters, word_display):
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
    begin_gessing(word, guessed_letters, word_display)

def ask(word, guessed_letters, word_display):
    # Ask the user for a letter
    if len(guessed_letters) > 0:
        temp_display = ""
        for letter in guessed_letters:
            temp_display += letter + ", "
        # print(word_display)
        # print(temp_display)
        # print(f"You have guessed: {guessed_letters}")
        print(f"You have guessed: {temp_display}")
    guess = input("Guess a letter: ")
    return guess
    
def begin_gessing(word, guessed_letters, word_display):
    guess = ask(word, guessed_letters, word_display)

    if guess.lower() == "!quit!":
        quit()
    elif guess.lower() == word:
        print(word)
        print("Congrats!")
        quit()
    elif len(guess) > 1:
        print("That word is not correct.")
        guessed_letters.append(guess)
        displayLetters(word, guessed_letters, word_display)
        ask(word, guessed_letters, word_display)
    elif guess.lower() in guessed_letters:
        print(f"You have already guessed {guess.lower()}")
        displayLetters(word, guessed_letters, word_display)
        ask(word, guessed_letters, word_display)
    else:
        guessed_letters.append(guess)
        displayLetters(word, guessed_letters, word_display)
        ask(word, guessed_letters, word_display)

main()