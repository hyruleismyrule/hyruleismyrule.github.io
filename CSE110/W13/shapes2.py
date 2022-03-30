print()
import math

# Calculates the area of a square
# def area_square(side_1):
#     area = side_1 * side_1
#     return area

def area_square(side_1):
    # area = side_1 * side_1
    area = area_rectangle(side_1, False)
    return area

# Calculates the area of a triangle
def area_triangle(side_1, side_2):
    area = (side_1 / 2) * side_2
    return area

# Calculates the area of a rectangle
def area_rectangle(side_1, side_2):
    if side_2:
        area = side_1 * side_2
    else:
        area = side_1 * side_1
    return area

# Calculates the area of a circle
def area_circle(side_1):
    area = (side_1 * side_1) * math.pi
    return area

# Calculates the area
def compute_area(shape):
    if shape.lower() == "square":
        side_1 = float(input("What is the side length of the square? "))
        area = area_square(side_1)
        return area
    elif shape.lower() == "circle":
        side_1 = float(input("What is the radius of the circle? "))
        area = area_circle(side_1)
        return area
    elif shape.lower() == "rectangle":
        side_1 = float(input("What is the length of the rectangle? "))
        side_2 = float(input("What is the width of the rectangle? "))
        area = area_rectangle(side_1, side_2)
        return area
    elif shape.lower() == "triangle":
        side_1 = float(input("What is the base of the triangle? "))
        side_2 = float(input("What is the height of the triangle? "))
        area = area_rectangle(side_1, side_2)
        return area

shape = ""

# Ask for the shape
while shape.lower() != "quit":
    print("Calculate the area of a SQUARE, TRIANGLE, RECTANGLE, or CIRCLE. Type QUIT to exit.")
    shape = input("What is the shape? ")
    print()
    if shape.lower != "quit":
        compute_area(shape)
    else:
        print("Thank you, for the wonderful semester!")
    # if shape.lower() == "square":
    #     side_1 = float(input("What is the side length of the square? "))
    #     print()
    #     square_area = area_square(side_1)
    #     print(f"The area of the square is {square_area}")
    #     print()
    # elif shape.lower() == "triangle":
    #     side_1 = float(input("What is the base of the triangle? "))
    #     side_2 = float(input("What is the height of the triangle? "))
    #     print()
    #     triangle_area = area_triangle(side_1, side_2)
    #     print(f"The area of the square is {triangle_area}")
    #     print()
    # elif shape.lower() == "rectangle":
    #     side_1 = float(input("What is the width of the rectangle? "))
    #     side_2 = float(input("What is the height of the rectangle? "))
    #     print()
    #     rectangle_area = area_rectangle(side_1, side_2)
    #     print(f"The area of the square is {rectangle_area}")
    #     print()
    # elif shape.lower() == "circle":
    #     side_1 = float(input("What is the radius of the circle? "))
    #     print()
    #     circle_area = area_circle(side_1)
    #     print(f"The area of the circle is {circle_area:.2f}")
    #     print()
    # else:
        # if shape.lower != "quit":
        #     print("Please enter either SQUARE, TRIANGLE, RECTANGLE, or CIRCLE. Type QUIT to exit.")
        # else:
        #     print("Thank you, for the wonderful semester!")