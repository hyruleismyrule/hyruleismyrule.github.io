1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37	# Example 2

from draw2d import \
    start_drawing, draw_line, draw_text, finish_drawing

def main():
    scene_width = 600
    scene_height = 375

    # Call the start_drawing function in the draw2d.py
    # library which will open a window and create a canvas.
    canvas = start_drawing("Grid", scene_width, scene_height)

    draw_grid(canvas, scene_width, scene_height, 50)

    # Call the finish_drawing function
    # in the draw2d.py library.
    finish_drawing(canvas)


def draw_grid(canvas, width, height, interval, color="blue"):
    # Draw a vertical line at every x interval.
    label_y = 15
    for x in range(interval, width, interval):
        draw_line(canvas, x, 0, x, height, fill=color)
        draw_text(canvas, x, label_y, f"{x}", fill=color)

    # Draw a horizontal line at every y interval.
    label_x = 15
    for y in range(interval, height, interval):
        draw_line(canvas, 0, y, width, y, fill=color)
        draw_text(canvas, label_x, y, f"{y}", fill=color)


# Call the main function so that
# this program will start executing.
main()