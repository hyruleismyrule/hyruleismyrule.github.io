import math
from datetime import datetime
current_date_and_time = datetime.now()
print()
# print(f"{current_date_and_time:%Y-%m-%d}")

width = float(input("Enter the width of the tire in mm (ex 205): "))
aspect_ratio = float(input("Enter the aspect ratio of the tire (ex 60): "))
diameter = float(input("Enter the diameter of the wheel in inches (ex 15): "))

print()
volume = (math.pi * (width ** 2) * aspect_ratio * (width * aspect_ratio + 2540 * diameter)) / 10000000000
print(f"The approximate volume is {volume:.2f} liters")

print()

with open("CSE111/W02/volumes.txt", "at") as volumes_file:
    print(f"{current_date_and_time:%Y-%m-%d}, {width}, {aspect_ratio}, {diameter}, {volume:.2f}", file=volumes_file)
