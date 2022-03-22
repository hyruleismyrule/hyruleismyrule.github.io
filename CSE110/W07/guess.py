print()
# Set random number
import random
# print("sucessful")
number = random.randint(1, 100)
# print(number)
# Get number as inputs
guess = int(input("What is your guess? "))
# print()
# Check for incorrect guess
while number != guess:
    # Check for Lower Loop
    while number < guess:
        print("Lower")
        guess = int(input("What is your guess? "))
        # Check for Higher Loop
    while number > guess:
        print("Higher")
        guess = int(input("What is your guess? "))
# Check for match
if number == guess:
    print("You guessed it!")
    print()