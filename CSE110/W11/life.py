print()
with open("CSE110/W11/life-expectancy.csv") as life_expectancy_file:

    next(life_expectancy_file)

    lowest_life = 100
    highest_life = 0

    for line in life_expectancy_file:
        clean_line = line.strip()
        parts = clean_line.split(",")

        country = parts[0]
        abr_country = parts[1]
        date_year = parts[2]
        life_year = float(parts[3])

        if life_year > highest_life:
            highest_life = life_year

        if life_year < lowest_life:
            lowest_life = life_year

    print(f"The lowest life expectancey was: {lowest_life}")
    print(f"The highest life expectance was: {highest_life}")
    
print()