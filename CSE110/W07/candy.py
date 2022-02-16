# Negative number test
print()
number = -1
while number < 0:
    number = int(input("Please type a positive number: "))
    if number < 0:
        print("Sorry, that is a negative number. Please try again.")
print(f"The number is: {number}")
print()
# Candy test
decision = "no"
while decision.lower() == "no":
    decision = input("May I have a piece of candy? ")
print("Thank you.")