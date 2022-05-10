from draw2d import \
    start_drawing, draw_line, draw_oval, draw_arc, \
    draw_rectangle, draw_polygon, draw_text, finish_drawing
import random

def main():
    scene_width = 800
    scene_height = 500

    canvas = start_drawing("Scene", scene_width, scene_height)

    draw_sky(canvas, scene_width, scene_height)
    draw_ocean(canvas, scene_width, scene_height)
    draw_ground(canvas, scene_width, scene_height)

    finish_drawing(canvas)

def draw_sunset(canvas, scene_width, scene_height):
    draw_rectangle(canvas, 0, 450,
            scene_width, scene_height, width=0, fill="coral")
    draw_rectangle(canvas, 0, 400,
            scene_width, 450, width=0, fill="coral1")
    draw_rectangle(canvas, 0, 350,
            scene_width, 400, width=0, fill="coral2")

def cloud_x(scene_width):
    number = random.randint(0, (scene_width))
    return number

def cloud_y():
    number = random.randint(350, 500)
    return number

def draw_clouds(canvas, scene_width, scene_height):
    for i in range(random.randint(2, 4)):
        draw_oval(canvas, cloud_x(scene_width), cloud_y(), cloud_x(scene_width), cloud_y(), fill="white", outline="white")
    
def draw_sun(canvas, scene_width, scene_height):
    draw_oval(canvas, scene_width/2 - 30, 320, scene_width/2 + 30, 380, width=1, outline="goldenrod1", fill="goldenrod1")

def draw_fish(canvas, scene_width, scene_height):
    for i in range(10):
        placement_x = random.randint(0, scene_width - 100)
        placement_y = random.randint(0, 150)
        draw_fish_body(canvas, scene_width, scene_height, placement_x, placement_y)
        draw_fish_tail(canvas, scene_width, scene_height, placement_x, placement_y)

def draw_fish_body(canvas, scene_width, scene_height, placement_x, placement_y):
    fish_start_x = 10 + placement_x
    fish_start_y = 110 + placement_y
    fish_end_x = 60 + placement_x
    fish_end_y = 140 + placement_y
    draw_oval(canvas, fish_start_x, fish_start_y, fish_end_x, fish_end_y, width=1, outline="white", fill="black")

def draw_fish_tail(canvas, scene_width, scene_height, placement_x, placement_y):
    tail_1_x = 60 + placement_x
    tail_1_y = 125 + placement_y
    tail_2_x = 80 + placement_x
    tail_2_y = 160 + placement_y
    tail_3_x = 80 + placement_x
    tail_3_y = 100 + placement_y

    draw_polygon(canvas, tail_1_x, tail_1_y, tail_2_x , tail_2_y, tail_3_x, tail_3_y,
        width=1, outline="white", fill="black")

def draw_sky(canvas, scene_width, scene_height):
    draw_sunset(canvas, scene_width, scene_height)
    draw_sun(canvas, scene_width, scene_height)
    draw_clouds(canvas, scene_width, scene_height)

def draw_bubbles(canvas, scene_width, scene_height):
    min_diam = 15
    max_diam = 30

    for i in range(100):
        x = random.randint(0, scene_width - max_diam)
        y = random.randint(100, 300)
        diameter = random.randint(min_diam, max_diam)
        draw_oval(canvas, x, y, x + diameter, y + diameter,
                fill="slateGray1", outline="slateGray4")

def draw_sand_castle(canvas, scene_width, scene_height):
    draw_rectangle(canvas, 250, 50, 300, 150, width=0, fill="peachPuff3")
    draw_rectangle(canvas, 320, 50, 380, 180, width=0, fill="peachPuff3")
    draw_rectangle(canvas, 300, 50, 400, 120, width=0, fill="peachPuff3")
    draw_rectangle(canvas, 400, 50, 450, 150, width=0, fill="peachPuff3")

def draw_ocean(canvas, scene_width, scene_height):
    draw_rectangle(canvas, 0, 100,
        scene_width, 350, width=0, fill="steelBlue4")
    draw_bubbles(canvas, scene_width, scene_height)
    draw_fish(canvas, scene_width, scene_height)

def draw_ground(canvas, scene_width, scene_height):
    draw_rectangle(canvas, 0, 0,
            scene_width, 100, width=0, fill="peachPuff")
    draw_sand_castle(canvas, scene_width, scene_height)

main()