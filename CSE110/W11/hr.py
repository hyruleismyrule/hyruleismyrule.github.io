print()
with open("CSE110/W11/hr_system.txt") as hr_file:
    for line in hr_file:
        clean_line = line.strip()
        parts = clean_line.split()
        name = parts[0]
        id_number = parts[1]
        title = parts[2]
        salary = float(parts[3])
        paycheck = (salary / 24)
        if title.lower() == "engineer":
            bonus = 1000
        else:
            bonus = 0
        paycheck += bonus
        print(f"{name} (ID: {id_number}), {title} - ${paycheck:.2f}")
print()