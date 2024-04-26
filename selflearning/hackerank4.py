n = int(input("diga un numero:"))

if 2 * n +1:
    print("es impar: Weird")
else:
     if n%2 == 0 and n>2 and n<5:
        print("es par entre 2 y 5 Not Weird")
     else:
        if n%2 == 0 and n<6 and n<20:
            print("Weird")
        else:
            if n > 20 and n % 2 == 0:
                print ("Not Weird")
        