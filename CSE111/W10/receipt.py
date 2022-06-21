import csv
# Import the datetime class from the datetime
# module so that it can be used in this program.
from datetime import datetime

def read_dict(filename, key_column_index):
    """Read the contents of a CSV file into a compound
    dictionary and return the dictionary.

    Parameters
        filename: the name of the CSV file to read.
        key_column_index: the index of the column
            to use as the keys in the dictionary.
    Return: a compound dictionary that contains
        the contents of the CSV file.
    """

    dictionary = {}

    try:
        with open(filename, "rt") as csv_file:

            reader = csv.reader(csv_file)

            next(reader)

            for row_list in reader:

                if len(row_list) != 0:

                    key = row_list[key_column_index]

                    dictionary[key] = row_list
    except (FileNotFoundError) as error:
        print()
        print(f"Error: missing file {error}")

    return dictionary

def main():
    INFORMATION_INDEX = 0
    print()
    # print(products_dict)
    print("Inkom Emporium")
    print()

    products_dict = read_dict("CSE111/W10/products.csv", INFORMATION_INDEX)

    try:
        with open("CSE111/W10/request.csv", "rt") as request_file:

            reader = csv.reader(request_file)

            next(reader)

            print("Requested Items")

            sub_total = 0
            num_items = 0

            for row_list in reader:

                # Request
                PRODUCT_NUMBER_INDEX = 0
                QUANTITY_INDEX = 1

                # Products
                PRODUCT_NAME_INDEX = 1
                PRODUCT_PRICE_INDEX = 2


                try:
                    product_number = row_list[PRODUCT_NUMBER_INDEX]
                    requested_quantity = int(row_list[QUANTITY_INDEX])
                
                    product_name = products_dict[product_number][PRODUCT_NAME_INDEX]
                    product_price = float(products_dict[product_number][PRODUCT_PRICE_INDEX])

                    total_product_price = product_price * requested_quantity
                    sub_total += total_product_price
                    num_items += 1 * requested_quantity
                    
                    print(f"{product_name}: {requested_quantity} @ ${product_price:.2f} = ${total_product_price:.2f}")
                except (TypeError, KeyError, IndexError) as error:
                    print()
                    print(f"Error: unknown product ID in the request.csv file '{row_list[PRODUCT_NUMBER_INDEX]}'")
    
            tax = 0.06
            tax_amount = tax * sub_total
            grand_total = sub_total + tax_amount
            print()
            print(f"Number of Items: {num_items}")
            print(f"Subtotal: ${sub_total:.2f}")
            print(f"Sales Tax: ${tax_amount:.2f}")
            print(f"Total: ${grand_total:.2f}")
            print()
            print("Thank you for shopping at the Inkom Emporium.")
    except (FileNotFoundError) as error:
                print()
                print(f"Error: missing file {error}")        


    # Call the now() method to get the current
    # date and time as a datetime object from
    # the computer's operating system.
    current_date_and_time = datetime.now()

    # Print the current day of the week and the current time.
    print(f"{current_date_and_time:%A %I:%M %p}")
    print()




# Call main to start this program.
if __name__ == "__main__":
    main()