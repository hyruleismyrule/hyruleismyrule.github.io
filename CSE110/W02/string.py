# sentence = "The cat is named Panda."
# print(sentence.upper())
# print(sentence.lower())
# print(sentence.capitalize())
# print(sentence.count("a"))
# print()
# # first_name = input("What is your first name? ")
# # last_name = input("What is your last name? ")
# # print("Hi, " + first_name.capitalize() + " " + last_name.capitalize() + ".")
# print()
# first_name = "Cynthia"
# last_name = "Rawlings"
# print(f"Hi, {first_name} {last_name}")
# print()
# output = "Hi, " + first_name + " " + last_name
# # output = "Hi, {} {}" .format(first_name, last_name)
# # output = "Hi, {0} {1}" .format(first_name, last_name)
# print(output)

first_name = "Cynthia"
last_name = "Rawlings"

# output = "Hi, {} {}".format(first_name, last_name)
output = "Hi, {1}, {0}" .format(first_name, last_name)
print(output)