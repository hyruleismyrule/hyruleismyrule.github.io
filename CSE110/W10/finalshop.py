print()
# Declare lists and variables
items = []
prices = []
menu_choice = 0
item_number = 1
price_number = 0
# Welcome
print("Welcome to the Shopping Cart Program!")
print()
# Repeat until quit
while menu_choice != 5:
    # Display Menu
    print("Please select one of the following:")
    print("1. Add item\n2. View cart\n3. Remove item\n4. Compute total\n5. Quit")
    menu_choice = int(input("Please enter an action: "))
    print()
    if menu_choice == 1:
        # Add to list (1)
        item = input("What item would you like to add? ")
        price = float(input(f"What is the price of '{item}'? "))
        items.append(item)
        prices.append(price)
        print(f"'{item}' has been added to the cart.")
        print()
    elif menu_choice == 2:
        # Display Cart (2)
        print("The contents of the shopping cart are:")
        for item in items:
            print(f"{item_number}. {item} - ${prices[price_number]:.2f}")
            item_number += 1
            price_number += 1
        print()
        # reset item and price number
        item_number = 1
        price_number = 0
    elif menu_choice == 3:
        # First display the cart
        print("The contents of the shopping cart are:")
        for item in items:
            print(f"{item_number}. {item} - ${prices[price_number]:.2f}")
            item_number += 1
            price_number += 1
        print()
        # reset item and price number
        item_number = 1
        price_number = 0
        # Remove item (3)
        delete_number = int(input("Which item would you like to remove? "))
        delete_number -= 1
        if delete_number <= len(items) and delete_number >= 0:
            print(f"{items[delete_number]} has been removed.")
            print()
            items.pop(delete_number)
            prices.pop(delete_number)
        else:
            print("Sorry, that is not a valid item number.")
        # Display the cart after the change is made
        print("The contents of the shopping cart are:")
        for item in items:
            print(f"{item_number}. {item} - ${prices[price_number]:.2f}")
            item_number += 1
            price_number += 1
        print()
        # reset item and price number
        item_number = 1
        price_number = 0
    elif menu_choice == 4:
        running_total = 0
        for price in prices:
            running_total += price
        print(f"The total price of the items in the shopping cart is ${running_total:.2f}")
    else:
        if menu_choice != 5:
            print(f"{menu_choice} is not valid, please try again.")
            print()
print("Thank you. Goodbye.")
print()