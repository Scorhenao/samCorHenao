#capturar una cantidad indeterminada de numero y calcular el promedio de numero pares e impares por separado
num = int(input("ingrese numero: "))

suma = 0
count = 0

count2 = 0
suma2 = 0

while num != 0:
    if num % 2 == 0:
        count += 1 
        suma += num
        num = int(input("ingrese otro numero: "))
    else:
        if num % 2 != 0:
            count2 += 1 
            suma2 += num
            num = int(input("ingrese otro numero: "))
    
promedio = suma / count
promedio2 = suma2 / count2

print(f"la sumatoria de los numeros pares es: {suma}")
print(f"el promedio de los numeros pares es: {promedio}")

print(f"la sumatoria de los numero impares es: {suma2}")
print(f"el promedio de los numeros impares es: {promedio2}")