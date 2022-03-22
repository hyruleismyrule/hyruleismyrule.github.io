print()
# Create empty list
friends = []
# Declare Variable
friend_name = ""
# loop checks if user types end
while friend_name.lower() != "end":
    # Asks for the name of a friend
    friend_name = input("Type the name of a friend: ")
    # If the name isn't end, add the name to the list of friends
    if friend_name.lower() != "end":
        friends.append(friend_name)
print()
# Print all the friends
print("Your friends are:")
for friend in friends:
    print(friend)
print()