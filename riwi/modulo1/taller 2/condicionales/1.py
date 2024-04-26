#escribe un programa que solicite al usuario ingresar un numero entero y luego imprima si es positivo, negativo o cero
num =int(input("ingrese un numero sr usuario"))
if num>0:
    print(f"el numero {num} es un positivo")
else:
    if num == 0:
        print(f"el numero {num} es cero")       #condicional anidado
    else:
        print(f"el numero {num} es negativo")
    