print()
# Calculates the wind chill with temperature in F and speed in MPH
def wind_chill(fah_temp, speed):
    chill = 35.74 + 0.6215 * fah_temp - 35.75 * (speed ** 0.16) + 0.4275 * fah_temp * (speed ** 0.16)
    return chill

# Calculates celsius to fahrenheit
def cel_to_fah(cel_temp):
    fah_temp = 32 + (cel_temp * (9/5))
    return fah_temp

# Calculates fahrenheit to celsius
def fah_to_cel(fah_temp):
    cel_temp = (fah_temp - 32) * (5/9)
    return cel_temp

temp = float(input("What is the temperature? "))
type = input("Fahrenheit or Celsius (F/C)? ")
print()
ans_type = input("Do you want the wind chill in Fahrenheit or Celsius (F/C)? " )

if type.lower() == "f":
    fah_temp = temp
    if ans_type.lower() == "f":
        for speed in range(5, 61, 5):
            chill = wind_chill(fah_temp, speed)
            print(f"At temperature {fah_temp}F, and wind speed {speed} mph, the windchill is: {chill:.2f}F")
    else:
        for speed in range(5, 61, 5):
            cel_temp = fah_to_cel(fah_temp)
            chill = wind_chill(fah_temp, speed)
            chill = fah_to_cel(chill)
            print(f"At temperature {cel_temp:.2f}C ({fah_temp}F), and wind speed {speed} mph, the windchill is: {chill:.2f}C")
else:
    cel_temp = temp
    fah_temp = cel_to_fah(cel_temp)
    if ans_type.lower() == "f":
        for speed in range(5, 61, 5):
            chill = wind_chill(fah_temp, speed)
            print(f"At temperature {fah_temp}F, and wind speed {speed} mph, the windchill is: {chill:.2f}F")
    else:
        for speed in range(5, 61, 5):
            chill = wind_chill(fah_temp, speed)
            chill = fah_to_cel(chill)
            print(f"At temperature {cel_temp}C, and wind speed {speed} mph, the windchill is: {chill:.2f}C")
print()