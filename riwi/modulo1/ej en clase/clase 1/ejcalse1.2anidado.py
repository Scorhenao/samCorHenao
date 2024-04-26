#saber si un numero es positivo o negativo

num =int(input("ingrese un numero sr usuario"))
if num>0:
    print(f"el numero {num} es un positivo")
else:
    if num == 0:
        print(f"el numero {num} es cero")       #condicional anidado
    else:
        print(f"el numero {num} es negativo")
    