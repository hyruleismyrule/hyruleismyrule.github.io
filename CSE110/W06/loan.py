print()
# Inputs
loan_size = float(input("How large is the loan? "))
credit_history = float(input("How good is your credit history? "))
income = float(input("How high is your income? "))
down_payment = float(input("How large is your down payment? "))
print()
# Calculations
if loan_size >= 5:
    if credit_history >= 7 and income >= 7:
        decision = "Yes"
    elif credit_history >= 7 or income >= 7:
        if down_payment >= 5:
            decision = "Yes"
        else:
            decision = "No"
else:
    if credit_history < 4:
        decision = "No"
    elif income >= 7 or down_payment >= 7:
        decision = "Yes"
    elif income >= 4 and down_payment >= 4:
        decision = "Yes"
    else:
        decision = "No"
print(f"The decision is {decision}")
print()