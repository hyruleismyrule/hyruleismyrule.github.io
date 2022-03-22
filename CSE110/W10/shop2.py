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
    print("1. Add item\n2. View cart\n3. Remove item\n4. Compute total\n5. Quit\n6. Replace Item")
    menu_choice = int(input("Please enter an action: "))
    print()
    if menu_choice == 1:
        # Add to list
        item = input("What item would you like to add? ")
        price = float(input(f"What is the price of '{item}'? "))
        items.append(item)
        prices.append(price)
        print(f"'{item}' has been added to the cart.")
        print()
    if menu_choice == 2:
        # Display Cart
        print("The contents of the shopping cart are:")
        for item in items:
            print(f"{item_number}. {item} - ${prices[price_number]:.2f}")
            item_number += 1
            price_number += 1
        print()
    if menu_choice == 6:
        # Replace Item
        print("The contents of the shopping cart are:")
        for item in items:
            print(f"{item_number}. {item} - ${prices[price_number]:.2f}")
            item_number += 1
            price_number += 1
        print()
        # Reset Item and Price number!
        item_number = 1
        price_number = 0
        change_number = int(input("Which item would you like to change? ")) - 1
        # print(change_number)
        change_name = input("What is the new item? ")
        change_price = float(input(f"What is the price of {change_name} "))
        print()
        items[change_number] = change_name
        prices[change_number] = change_price
        print("The contents of the shopping cart are: ")
        # print(items)
        # print(prices)
        for item in items:
            print(f"{item_number}. {item} - ${prices[price_number]:.2f}")
            item_number += 1
            price_number += 1
        print()
print("Thank you. Goodbye.")
print()