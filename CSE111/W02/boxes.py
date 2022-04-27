import math

def num_boxes():
    num_boxes = math.ceil(items / items_per_box)
    return num_boxes

print()
items = int(input("Enter the number of items: "))
items_per_box = int(input("Enter the number of items per box: "))

print()
num_boxes = num_boxes()
print(f"For {items} items, packing {items_per_box} items in each box, you will need {num_boxes} boxes.")

print()