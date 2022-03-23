print()
with open("CSE110/W12/books_and_chapters.txt") as books_and_chapters_file:

    largest_numb_chapters = -1
    largert_numb_chapters_name = ""

    print("1. Old Testament")
    print("2. New Testament")
    print("3. Book of Mormon")
    print("4. Doctrine and Covenants")
    print("5. Pearl of Great Price")
    print()

    interest_number = int(input("Which volume of scripture are you interested in, please type the number: "))
    print()

    if interest_number == 1:
        interest = "old testament"
    elif interest_number == 2:
        interest = "new testament"
    elif interest_number == 3:
        interest = "book of mormon"
    elif interest_number == 4:
        interest = "doctrine and covenants"
    else:
        interest = "pearl of great price"

    for line in books_and_chapters_file:
        clean_line = line.strip()
        parts = clean_line.split(":")

        scripture = parts[2]
        book = parts[0]
        chapters = int(parts[1])

        # print(f"Scripture: {scripture}, Book: {book}, Chapters: {chapters}")

        # if chapters > largest_numb_chapters:
        #     largest_numb_chapters = chapters
        #     largert_numb_chapters_name = book

        if scripture.lower() == interest:
            print(f"Scripture: {scripture}, Book: {book}, Chapters: {chapters}")
            if chapters > largest_numb_chapters:
                largest_numb_chapters = chapters
                largert_numb_chapters_name = book

    print()
    print(f"The largest book is {largert_numb_chapters_name}, and it has {largest_numb_chapters} chapters")    

print()