#Crea un programa que solicite al usuario ingresar 5 alturas (en metros) y luego calcule el promedio de esas alturas.

i = 1

count = 0
suma = 0

while i <= 5:
    altura = float(input("ingrese una altura: "))
    suma += altura
    count += 1
    i += 1

promedio = suma / count

print(f"el promedio de las alturas es: {round(promedio,2)}")
print(f"la suma de las alturas es: {suma}")