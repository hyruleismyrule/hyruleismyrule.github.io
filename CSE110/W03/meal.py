print()
# Get info from the user
price_child = float(input("What is the price of a child's meal? "))
price_adult = float(input("What is the price of an adult's meal? "))
children = int(input("How many children are there? "))
adults = int(input("How many adults are there? "))
tax = float(input("What is the sales tax rate? "))
print()
# Calculate the subtotal
subtotal = (price_child * children) + (price_adult * adults)
print(f"Subtotal: ${round(subtotal, 2)}")
# Calculate sales tax
total_tax = (tax / 100) * subtotal
print(f"Sales Tax: ${round(total_tax, 2)}")
# print(round(total_tax, 2))
# Calculate total
total = ((tax / 100) * subtotal) + subtotal
print(f"Total: ${round(total, 2)}")
print()
payment = float(input("What is the payment amount? "))
# calculate change
change = payment - total
print(f"Change: ${round(change, 2)}")
print()