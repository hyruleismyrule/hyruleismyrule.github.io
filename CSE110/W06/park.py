print()
# get info for rider
age_1 = int(input("What is the age of the first rider? "))
height_1 = int(input("What is the height of the first rider? "))
riders = input("Is there a second rider (yes/no)? ")
print()
# Check for golden passport
if age_1 >= 12 and age_1 < 18:
    ticket = input("Do you have a Golden Ticket (yes/no)? ")
    print()
    if ticket.lower() == "yes":
        age_1 = 18
# Check if two riders
if riders.lower() == "yes":
    # get info for second rider
    age_2 = int(input("What is the age of the second rider? "))
    height_2 = int(input("What is the height of the second rider? "))
    print()
    # Check doubble rider
    # Check for golden passport
    if age_2 >= 12 and age_2 < 18:
        ticket = input("Do you have a Golden Ticket (yes/no)? ")
    if ticket.lower() == "yes":
        age_2 = 18
    # Check height
    if height_1 < 36 or height_2 < 36:
            print("Sorry, you may not ride.")
    # Check age
    if height_1 >= 36 and height_2 >= 36:
        if age_1 >= 18 or age_2 >= 18:
            print("Welcome to the ride. Please be safe and have fun!")
            # Check for age and height of both
        elif age_1 >= 12 and age_2 >= 12 and height_1 >= 52 and height_2 >= 52:
            print("Welcome to the ride. Please be safe and have fun!")
            # Check for doubble age
        elif age_1 >= 16 and age_2 >= 14 or age_2 >= 16 and age_1 >= 14:
            print("Welcome to the ride. Please be safe and have fun!")
        else:
           print("Sorry, you may not ride.") 
if riders.lower() == "no":
    # Check Single Rider
    # Check height
    if height_1 < 36:
        print("Sorry, you may not ride.")
    # Check age and height
    if age_1 >= 18 and height_1 >= 62:
        print("Welcome to the ride. Please be safe and have fun!")
    else:
        print("Sorry, you may not ride.")
print()