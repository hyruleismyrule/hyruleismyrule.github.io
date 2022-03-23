print()
with open("CSE110/W11/life-expectancy.csv") as life_expectancy_file:

    next(life_expectancy_file)

    overall_lowest_life = 100
    overall_highest_life = 0

    overall_lowest_life_place = ""
    overall_highest_life_place = ""

    overall_lowest_life_year = ""
    overall_highest_life_year = ""

    lowest_life = 100
    highest_life = 0

    lowest_life_place = ""
    highest_life_place = ""

    total_life = 0
    total_numb_life = 0

    interest = input("Enter the year of interest: ")

    for line in life_expectancy_file:
        clean_line = line.strip()
        parts = clean_line.split(",")

        country = parts[0]
        abr_country = parts[1]
        date_year = parts[2]
        life_year = float(parts[3])

        if life_year > highest_life:
            overall_highest_life = life_year
            overall_highest_life_place = country
            overall_highest_life_year = date_year

        if life_year < lowest_life:
            overall_lowest_life = life_year
            overall_lowest_life_place = country
            overall_lowest_life_year = date_year

        # Year of interest
        if date_year == interest:
            # Find average life expectancy
            total_life += life_year
            total_numb_life += 1

            # Find max and min
            if life_year > highest_life:
                highest_life = life_year
                highest_life_place = country

            if life_year < lowest_life:
                lowest_life = life_year
                lowest_life_place = country

    print()
    print(f"The overall max life expectancy is: {overall_highest_life} from {overall_highest_life_place} in {overall_highest_life_year}")
    print(f"The overall min life expectancy is: {overall_lowest_life} from {overall_lowest_life_place} in {overall_lowest_life_year}")

    print()
    print("For the year 1959:")
    average_life = total_life / total_numb_life
    print(f"The average life expectancy across all countries was {average_life:.2f}")
    print(f"The max life expectancy was in {highest_life_place} with {highest_life}")
    print(f"The min life expectancy was in {lowest_life_place} with {lowest_life}")
    
print()