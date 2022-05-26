from pickle import TRUE

# total_points = 0
def ask_aqustions():
    question1 = input("I feel that I am a person of worth, at least on an equal plane with others. ")
    question2 = input("I feel that I have a number of good qualities. ")
    question3 = input("All in all, I am inclined to feel that I am a failure. ")
    question4 = input("I am able to do things as well as most other people. ")
    question5 = input("I feel I do not have much to be proud of. ")
    question6 = input("I take a positive attitude toward myself. ")
    question7 = input("On the whole, I am satisfied with myself. ")
    question8 = input("I wish I could have more respect for myself. ")
    question9 = input("I certainly feel useless at times. ")
    question10 = input("At times I think I am no good at all. ")

    answers = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
    posive = [True, True, False, True, False, True, True, False, False, False]

    # for answer, i in enumerate(answers):
    #     calculate_points(answer, posive[int(i)])

    # for answer, i in enumerate(answers):
    #     calculate_points(answer, posive[int(i)])

    # xs = [8, 23, 45]
    total_points = 0

    for answer in range(len(answers)):
        # calculate_points(answer, posive[])
       total_points += calculate_points(answers[answer],posive[answer], total_points)

    return total_points
    # for index, answer in answers:
    #     calculate_points(answer, posive[index])
        # print("item #{} = {}".format(index, x))



def calculate_points(answers, posive, total_points):
    if posive == True:
        if answers == "A":
            total_points += 3
        elif answers == "a":
            total_points += 2
        elif answers == "d":
            total_points += 1
        else:
            total_points += 0
    else:
        if answers == "D":
            total_points += 3
        elif answers == "d":
            total_points += 2
        elif answers == "a":
            total_points += 1
        else:
            total_points += 0

    return total_points

# def check_points(total_points):
#     if (total_points <= 15):
        
    

def main():
    print("The Rosenberg self-esteem scale is a self-esteem measure developed by the sociologist Morris Rosenberg in 1965. It is still used in social-science research today. To complete the measure, a person completes a survey that contains the following ten statements.")
    print()
    total_points = ask_aqustions()
    print(f"Your score was {total_points}, A score below 15 may indicate problematic low self-esteem.")

main()