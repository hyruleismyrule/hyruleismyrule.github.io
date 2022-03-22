print()
print("Enter a list of numbers, type 0 when finished")
number = int(input("Enter number: "))
numbers = []
running_total = 0
running_total += number
while number != 0:
    number = int(input("Enter number: "))
    if number != 0:
        numbers.append(number)
        running_total += number
average = running_total / (len(numbers) + 1)
numbers.sort()
largest_number = numbers[-1]
positives = []
for number in numbers:
    if number > 0:
        positives.append(number)
small_positive = positives[0]
print(f"The sum is: {running_total}")
print(f"The average is: {average:.3f}")
print(f"The largest number: {largest_number}")
print(f"The smallest positive number is: {small_positive}")
print(f"The sorted list is:")
for number in numbers:
    print(number)
print()