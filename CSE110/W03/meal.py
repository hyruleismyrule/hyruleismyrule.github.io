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
print(f"Subtotal: ${subtotal:.2f}")
# Calculate sales tax
total_tax = (tax / 100) * subtotal
print(f"Sales Tax: ${total_tax:.2f}")
# Calculate total
total = ((tax / 100) * subtotal) + subtotal
print(f"Total: ${total:.2f}")
print()
payment = float(input("What is the payment amount? "))
# calculate change
change = payment - total
print(f"Change: ${change:.2f}")
print()