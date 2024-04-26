year = int(input("ingrese un año: "))


if year % 4 == 0 and year % 100 != 0:
    print(True) 
else:
    if year % 4 == 0 and year % 100 == 0 and year % 400 != 0:
        print(False)
    else:
        if year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
            print("is_leap")