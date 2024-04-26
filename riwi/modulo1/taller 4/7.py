#Desarrolla un programa que solicite al usuario ingresar 10 números enteros y luego cuente cuántos de esos números son mayores que 100.

i = 1

count = 0
suma = 0

while i <= 10:
    num = float(input("ingrese una altura: "))
    if num >= 100:
        count += 1
    i += 1

promedio = suma / count

print(f"la cantidad de numeros mayores a 100 son: {count}")
