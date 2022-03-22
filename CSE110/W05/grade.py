print()
grade = float(input("What is yout grade percentage? "))
print()
if grade >= 93:
    letter = "A"
elif grade >= 90:
    letter = "A-"
elif grade >= 87:
    letter = "B+"
elif grade >= 83:
    letter = "B"
elif grade >= 80:
    letter = "B-"
elif grade >= 77:
    letter = "C+"
elif grade >= 73:
    letter = "C"
elif grade >= 70:
    letter = "C-"
elif grade >= 67:
    letter = "D+"
elif grade >= 63:
    letter = "D"
elif grade >= 60:
    letter = "D-"
elif grade < 60:
    letter = "F"
print(f"Your grade is {letter}")
if grade >= 70:
    print("Congrats! You passed the class!")
else:
    print("You didn't pass, better luck next time.")
print()
# if grade >= 90:
#     # print("Your grade is A")
#     letter = "A"
# elif grade >= 80:
#     # print("Your grade is B")
#     letter = "B"
# elif grade >= 70:
#     # print("Your grade is C")
#     letter = "C"
# elif grade >= 60:
#     # print("Your grade is D")
#     letter = "D"
# elif grade < 60:
#     # print("Your grade is F")
#     letter = "F"
# print(f"Your grade is {letter}")
# if grade >= 70:
#     print("Congrats! You passed the class!")
# else:
#     print("You didn't pass, better luck next time.")