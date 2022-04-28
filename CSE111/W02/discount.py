from datetime import datetime
# Monday is 1 and Sunday is 7
# today = datetime.today().isoweekday()
today = 2
def calculate_tax(sub_total):
    tax = sub_total * 0.06
    return tax

print()
sub_total = float(input("Please enter the subtotal: "))

# price = 1
# while price != 0:
#     num_of_items = int()

if today == 2 or today == 3:
    if sub_total > 50:
        price_until_dicount = 50 - sub_total
        print(f"If you add {price_until_dicount} worth of stuff, you will recieve and 10% discount")

    else:
        discount = sub_total * 0.1
        discounted_total = sub_total - discount
        tax = calculate_tax(discounted_total)
        total = discounted_total + tax
        print(f"Discount amount: {discount:.2f}")
    
else:
    tax = calculate_tax(sub_total)
    total = sub_total + tax

print(f"Sales tax amount: {tax:.2f}")
print(f"Total: {total:.2f}")
print()
