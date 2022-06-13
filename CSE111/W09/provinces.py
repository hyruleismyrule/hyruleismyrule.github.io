def main():
    provinces_list = read_list("CSE111/W09/provinces.txt")

    print(provinces_list)
    print()

    provinces_list.pop(0)
    provinces_list.pop()

    modified_provinces_list = []
    alberta_count = 0

    for line in provinces_list:
        if line == "AB":
            line = "Alberta"
            alberta_count += 1

        elif line == "Alberta":
            alberta_count += 1

        modified_provinces_list.append(line)
    
    print(f"Alberta occurs {alberta_count} times in the modified list")
    # print()
    # print(modified_provinces_list)
    print()

    



def read_list(filename):
    """Read the contents of a text file into a list and
    return the list. Each element in the list will contain
    one line of text from the text file.

    Parameter filename: the name of the text file to read
    Return: a list of strings
    """
   
    provinces_list = []

    with open(filename, "rt") as provinces_file:

        for line in provinces_file:

            clean_line = line.strip()

            provinces_list.append(clean_line)

    return provinces_list


if __name__ == "__main__":
    main()