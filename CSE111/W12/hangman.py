# This is a hangman game
from random import randint
guessed_letters = []
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
    # print(word)

    displayLetters(word, guessed_letters)

def displayLetters(word, guessed_letters):
    if len(guessed_letters) == 0:
        print()
        for letter in word:
            print(" _", end = ' ')
        print()
        print()
        guess_letter(word, guessed_letters)
    else:
        for letter in guessed_letters:
            # if letter == 
            # Left off here, marking letters guessed correctly

def guess_letter(word, guessed_letters):
    if len(guessed_letters) > 0:
        print(f"You have guessed: {guessed_letters}")
    letter = input("Guess a letter: ")

    while letter.lower() in guessed_letters:
        print(f"You have already guessed {letter.lower()}")
        letter = input("Guess a letter: ")

    guessed_letters.append(letter.lower())
    displayLetters(word, guessed_letters)


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