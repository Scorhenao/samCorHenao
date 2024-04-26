#Desarrolla un programa que solicite al usuario ingresar 7 números enteros y luego calcule el promedio de esos números que sean pares.

i = 1

count = 0
suma = 0

while i <= 7:
    num = int(input("ingrese numero: "))
    if num % 2 == 0: 
        suma += num
        count += 1
    i += 1

promedio = suma / count

print(f"el promedio de los numeros pares es: {promedio}")
print(f"la suma de los numeros pares es: {suma}")