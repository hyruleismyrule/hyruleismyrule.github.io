import math

def main():
    print()
    name = "#1 Picnic"
    radius = 6.83
    height = 10.16
    compute_info(radius, height, name)

    name = "#1 Tall"
    radius = 7.78
    height = 11.91
    compute_info(radius, height, name)

    name = "#2"
    radius = 8.73
    height = 11.59
    compute_info(radius, height, name)

    name = "#2.5"
    radius = 10.32
    height = 11.91
    compute_info(radius, height, name)

    name = "#3 Cylinder"
    radius = 10.79
    height = 17.78
    compute_info(radius, height, name)

    name = "#5"
    radius = 14.29	
    height = 17.78
    compute_info(radius, height, name)

    name = "#6Z"
    radius = 5.40
    height = 8.89
    compute_info(radius, height, name)

    name = "#8Z short"
    radius = 6.83
    height = 7.62
    compute_info(radius, height, name)

    name = "#10"
    radius = 15.72
    height = 17.78	
    compute_info(radius, height, name)

    name = "#211"
    radius = 6.83
    height = 12.38
    compute_info(radius, height, name)

    name = "#300"
    radius = 7.62
    height = 11.27
    compute_info(radius, height, name)

    name = "#303"
    radius = 8.10
    height = 11.11	
    compute_info(radius, height, name)
    print()

def compute_info(radius, height, name):
    volume = compute_volume(radius, height)
    surface_area = compute_surface_area(radius, height)
    storage_efficiency = volume / surface_area

    print(f"{name}, Volume: {volume:.2f}, Surface Area: {surface_area:.2f}, Storage Efficiency: {storage_efficiency:.2f}")

def compute_volume(radius, height):
    volume = math.pi * (radius * radius) / height
    return volume

def compute_surface_area(radius, height):
    surface_area = 2 * math.pi * radius * (radius + height)
    return surface_area

main()
