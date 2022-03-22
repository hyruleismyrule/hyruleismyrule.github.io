from stringprep import in_table_c5
print()
# Get the number of columns from the user
user_choice = int(input("How many columns and rows do you want in your multiplication table? "))
range_size = user_choice + 1
# Calculate the spaces
space_number = len(str(range_size * range_size))
# Generate the Table
for row_number in range(1, range_size):
    for col_number in range(1, range_size):
        # Get number for multiplying
        number = row_number * col_number
        # Display the number
        print(f"{number:{space_number}}", end=" ")
    print()    
print()