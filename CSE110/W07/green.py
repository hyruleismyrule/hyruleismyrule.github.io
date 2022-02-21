# Part 1 Week 7
# print()
# Import pillow library
# from PIL import Image
# Get beach image
# image_original = Image.open("CSE110/W07/cse110_images/beach.jpg")
# # Display beach image
# image_original.show()
# # get the width and height of the beach image
# width, height = image_original.size
# # Display width and height
# print(f"Image Width: {width}, Height: {height}")
# print()
# # Get the pixels
# pixels_original = image_original.load()
# # Get specific pixels
# r, g, b = pixels_original[100, 200]
# print(f"The original pixel value was: {r, g, b}")
# # Set the new color values
# r, g, b = (0, 0, 0)
# print(f"The new pixel value is: {r, g, b}")
# # Set those pixels to something else
# pixels_original[0, 0] = (r, g, b)
# # Display the image again
# image_original.show()
# # Save as a new image
# image_original.save("CSE110/W07/cse110_images/new_beach.jpg")
# print()
# # # # # # # # # # # # #
# Part 2
# Import pillow library
from PIL import Image
print()
# Get spaceshuttle green screen image
green_location = "CSE110/W07/cse110_images/harvester.jpg"
image_green = Image.open(green_location)
# Get background image
background_location = "CSE110/W07/cse110_images/snowscape.jpg"
image_background = Image.open(background_location)
pixels_background = image_background.load()
# Get the dimensions and pixels of the green image
width, height = image_green.size
pixels_green = image_green.load()
# Create a new image
image_combined = Image.new("RGB", image_background.size)
pixels_combined = image_combined.load()
# Cycle through the pixles
for y in range(0, height):
    for x in range(0, width):
        (r, g, b) = pixels_green[x, y]
        # Check for Green, if green grab background if not, grab foreground
        if r <= 120 and g >= 130 and b <= 120:
            pixels_combined[x, y] = pixels_background[x, y]
        else:
             pixels_combined[x, y] = pixels_green[x, y]
# Display Image
image_combined.show()
# # Save as a new image
save_location = "CSE110/W07/cse110_images/combined.jpg"
image_combined.save(save_location)
print(f"Done! The image is saved to {save_location}")
print()