# Part 2 Week 8
# Import pillow library
from PIL import Image
print()
print()
print()
print()
# Choose file foreground
foreground_file_name = input(f"Please pick a image for the foreground: BOAT, CACTUS, CAT_SMALL, CAT, HARVESTER, HIKER, PENGUIN, SPACESHUTTLE: ")
# Get chosen green screen image
green_location = "CSE110/W07/cse110_images/" + foreground_file_name.lower() + ".jpg"
image_green = Image.open(green_location)
# Choose file background image
background_file_name = input(f"Please pick a image for the background: BEACH, DESERT, EARTH, FIELD, FOREST, SNOWSCAPE, SUNSET: ")
# Get chosen background image
background_location = "CSE110/W07/cse110_images/" + background_file_name.lower() + ".jpg"
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
save_location = "CSE110/W07/cse110_images/" + foreground_file_name.lower() + "_" + background_file_name.lower() + ".jpg"
image_combined.save(save_location)
print(f"Done! The image is saved to: {save_location}")
print()
print()
print()
print()