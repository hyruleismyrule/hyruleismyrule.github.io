def read_list(filename):
    # This function is reused from a past assignment
    """Read the contents of a text file into a list and
    return the list. Each element in the list will contain
    one line of text from the text file.
    Parameter filename: the name of the text file to read
    Return: a list of strings
    """

    word_list = []

    with open(filename, "rt") as word_file:
        for line in word_file:
            clean_line = line.strip()
            clean_line = clean_line[:-1]
            word_list.append(clean_line)

    # return word_list
    print(word_list)

def main():
    filename = "CSE111/W13/easy.csv"
    read_list(filename)

main()