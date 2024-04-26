#capture un numero y digite si es positivo negativo o 0

num = int(input("ingrese un numero: "))

if num > 0:
    print("el numero es positivo")
elif num == 0:
    print("el numero ingresado es cero")
else:
    print("el numero ingresado es negativo")