# This is a hangman game
from random import randint
guessed_letters = []
word_display = []
def main():
    print()
    print("Welcome to Hangman!")
    difficulty = input("Pick a difficulty, EASY, MEDIUM, HARD: ")
    word = get_word(difficulty)

def get_word(difficulty):
    """Gets a word based on the difficulty."""
    # Wordlists for csv files come from
    # https://www.thegamegal.com/printables/
    difficulty = difficulty.lower()
    if difficulty == "hard" or difficulty == "h":
        word_list_file = "hard.csv"
    elif difficulty == "medium" or difficulty == "m":
        word_list_file = "medium.csv"
    else:
        word_list_file = "easy.csv"

    word_list = read_list("CSE111/W12/" + word_list_file)
    
    word = word_list[randint(0, len(word_list))]

    for character in word:
        word_display.append("_")
    # print(word)

    displayLetters(word, guessed_letters, word_display)

def displayLetters(word, guessed_letters, word_display):
    word_array = []
    for character in word:
        word_array.append(character)

    if len(guessed_letters) == 0:
        print()
        print(word_display)
        # for character in word:
        #     print("_", end = ' ')
        # print()
        print()
        guess_letter(word, guessed_letters, word_display)
    elif word_array == word:
        print(f"{word}")
        print("Congrats!")

    else:
        # Left off here, marking letters guessed correctly
        letter = guessed_letters[-1]
        character_index = 0
        for character in word:
            if character == letter:
                # word_display.append(letter.lower())
                # word_display.insert(character_index, letter)
                word_display[character_index] = letter
            else:
                # word_display.insert(character_index, "_")
                if word_display[character_index] == "_":
                    word_display[character_index] = "_"
            character_index += 1
        print(word_display)

        # for letter in guessed_letters:
        #     if word.count(letter) == 0:
        #         print("_", end = ' ')
        #     else:
        #         word.index(letter,)
        print()
    guess_letter(word, guessed_letters, word_display)

def guess_letter(word, guessed_letters, word_display):
    if len(guessed_letters) > 0:
        print(f"You have guessed: {guessed_letters}")
    guess = input("Guess a letter: ")

    while guess.lower() in guessed_letters:
        print(f"You have already guessed {guess.lower()}")
        guess = input("Guess a letter: ")

    checkGuess(word, guessed_letters, word_display, guess)

    
    guess_letter(word, guessed_letters, word_display)
    

def checkGuess(word, guessed_letters, word_display, guess):
    if guess == word:
        print(word)
        print("Congrats!")
    elif len(guess) > 1:
        guess_letter(word, guessed_letters, word_display)
        guessed_letters.append(guess.lower())
        # displayLetters(word, guessed_letters, word_display)
    elif guess.lower() in guessed_letters:
        print(f"You have already guessed {guess.lower()}")
        # guess_letter(word, guessed_letters, word_display)


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

    
main()