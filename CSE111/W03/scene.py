# Import the functions from the Draw 2-D library
# so that they can be used in this program.
from draw2d import \
    start_drawing, draw_line, draw_oval, draw_arc, \
    draw_rectangle, draw_polygon, draw_text, finish_drawing
import random


def main():
    # Width and height of the scene in pixels
    scene_width = 800
    scene_height = 500

    # Call the start_drawing function in the draw2d.py
    # library which will open a window and create a canvas.
    canvas = start_drawing("Scene", scene_width, scene_height)

    # Call your drawing functions such
    # as draw_sky and draw_ground here.
    draw_sky(canvas, scene_width, scene_height)
    # draw_ocean(canvas, scene_width, scene_height)
    # draw_ground(canvas, scene_width, scene_height)

    # Call the finish_drawing function
    # in the draw2d.py library.
    finish_drawing(canvas)


# Define your functions such as
# draw_sky and draw_ground here.
def draw_sunset(canvas, scene_width, scene_height):
    draw_rectangle(canvas, 0, 450,
            scene_width, scene_height, width=0, fill="coral")
    draw_rectangle(canvas, 0, 400,
            scene_width, 450, width=0, fill="coral1")
    draw_rectangle(canvas, 0, 350,
            scene_width, 400, width=0, fill="coral2")

# def random_number():
#     number = random.randint(1, 5)

def cloud_x(scene_width):
    number = random.randint(0, (scene_width))
    return number

def cloud_y():
    number = random.randint(350, 500)
    return number

def draw_clouds(canvas, scene_width, scene_height):
    # draw_oval(canvas, 0, 350, 300, 500, fill="white", outline="white")
    # Cloud range min(x) = -100, max(x) = scene_width + 100, min(y) = 350 max(y) 450  + 100
    for i in range(random.randint(4, 10)):
        draw_oval(canvas, cloud_x(scene_width), cloud_y(), cloud_x(scene_width), cloud_y(), fill="white", outline="white")
    
    

def draw_sky(canvas, scene_width, scene_height):
    draw_sunset(canvas, scene_width, scene_height)
    draw_clouds(canvas, scene_width, scene_height)

def draw_ocean(canvas, scene_width, scene_height):
    draw_rectangle(canvas, 0, 100,
        scene_width, 350, width=0, fill="steelBlue4")

def draw_ground(canvas, scene_width, scene_height):
    draw_rectangle(canvas, 0, 0,
            scene_width, 100, width=0, fill="peachPuff")

# Call the main function so that
# this program will start executing.
main()