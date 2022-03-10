print()
# Declare lists
account_names = []
account_balance = []
new_account = ""
account_number = 0
account_display = 1
# Add new account
print("Enter the names and balances of bank accounts (type: quit when done)")
while new_account.lower() != "quit":
    # Get account name and info
    new_account = input("What is the name of this account? ")
    if new_account.lower() != "quit":
        new_balance = float(input("What is the balance? "))
        # Add info to lists
        account_names.append(new_account)
        account_balance.append(new_balance)
# Display Account Info
print()
print("Account Information:")
for name in account_names:
    print(f"{account_display}. {name} - ${account_balance[account_number]:.2f}")
    account_number += 1
    account_display += 1
print()
# Calculations
running_total = 0
highest_balance = 0
# Reset account number
account_number = 0
account_display = 1
for balance in account_balance:
    running_total += balance
    if balance > highest_balance:
        highest_balance = balance
        highest_name = account_names[account_number]
    account_number += 1
average = running_total / len(account_balance)
print(f"Total: ${running_total:.2f}")
print(f"Average: ${average:.2f}")
print(f"Highest balance: {highest_name} - ${highest_balance:.2f}")
print()
# Update account
update = input("Do you want to update an account? ")
if update.lower() == "yes":
    update_number = int(input("What account index do you want to update? "))
    update_amount = float(input("What is the new amount? "))
    print(update_number-1)
    account_balance[update_number - 1] = update_amount
    # Display accounts
    print()
    print("Account Information:")
    for name in account_names:
        print(f"{account_display}. {name} - ${account_balance[account_number]:.2f}")
        account_number += 1
        account_display += 1
    print()
    # Calculations
    running_total = 0
    highest_balance = 0
    # Reset account number
    account_number = 0
    for balance in account_balance:
        running_total += balance
        if balance > highest_balance:
            highest_balance = balance
            highest_name = account_names[account_number]
        account_number += 1
    average = running_total / len(account_balance)
    print(f"Total: ${running_total:.2f}")
    print(f"Average: ${average:.2f}")
    print(f"Highest balance: {highest_name} - ${highest_balance:.2f}")
    print()
    # Ask for updates
    update = input("Do you want to update an account? ")