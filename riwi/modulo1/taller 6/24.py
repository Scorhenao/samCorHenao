#Leer n números enteros, almacenarlos en una lista y determinar si el promedio entero de estos datos está almacenado en la lista.
import random

lista = []

i = 1
cant_lista = 0

opcion = int(input("si quiere digitar un numero diga '1' si quiere parar de poner numero diga '2': "))

if opcion == 1:
    while opcion == 1:
        n = int(input("digite un numero: "))
        lista.append(n)
        cant_lista += 1
        suma_lista = sum(lista)
        promedio = suma_lista // cant_lista
        opcion = int(input("si quiere digitar un numero diga '1' si quiere parar de poner numero diga '2': "))
        i += 1
elif opcion == 2:
    exit    
else:
    print("digito una opcion no valida")

print(lista)
print(cant_lista)
print(suma_lista)
print(f"promedio de numero en la lista es: {promedio}")

if promedio in (lista):
    print("el promedio entero de la lista es un numero de la lista")
else:
    print("el promedio entero de la lista No es un numero en la lista")