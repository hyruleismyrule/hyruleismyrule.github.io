# Part 1 Week 7
print()
# Import pillow library
from PIL import Image
# Get beach image
image_original = Image.open("CSE110/W07/cse110_images/beach.jpg")
# Display beach image
image_original.show()
# get the width and height of the beach image
width, height = image_original.size
# Display width and height
print(f"Image Width: {width}, Height: {height}")
print()
# Get the pixels
pixels_original = image_original.load()
# Get specific pixels
r, g, b = pixels_original[100, 200]
print(f"The original pixel value was: {r, g, b}")
# Set the new color values
r, g, b = (0, 0, 0)
print(f"The new pixel value is: {r, g, b}")
# Set those pixels to something else
pixels_original[0, 0] = (r, g, b)
# Display the image again
image_original.show()
# Save as a new image
image_original.save("CSE110/W07/cse110_images/new_beach.jpg")
print()
# # # # # # # # # # # #