def main():
    # Create and print a list named fruit.
    print()
    fruit_list = ["pear", "banana", "apple", "mango"]
    print(f"original: {fruit_list}")

    # reverses the list
    print()
    fruit_list.reverse()
    print(f"reversed: {fruit_list}")

    # Adds crange to the end of the list
    fruit_list.append("orange")
    print(f"append orange: {fruit_list}")

    # Adds cherry before apple
    fruit_list.insert(fruit_list.index("apple"), "cherry")
    print(f"insert cherry: {fruit_list}")

    # Removes banana
    fruit_list.remove("banana")
    print(f"remove banana: {fruit_list}")

    # Removes the last element in the list
    print(f"fruit removed: {fruit_list[-1]}")
    fruit_list.pop()
    print(f"remove orange: {fruit_list}")

    # Sorts the list
    fruit_list.sort()
    print(f"sorted: {fruit_list}")

    # Clear list
    fruit_list.clear()
    print(f"cleared: {fruit_list}")
    print()


main()