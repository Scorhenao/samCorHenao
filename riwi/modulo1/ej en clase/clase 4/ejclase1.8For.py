#utilize el algotritmo anterior para calcular el promedio

suma = 0
suma2 = 0
count = 0
count2 = 0

for i in range(10, 31):    #solo el maximo debe ser 1 de mas
    if i % 2 == 0:
        count+=1
        suma += i
    else:
        count2 += 1
        suma2+= i

promedio = suma / count
promedio2 = suma2 / count2

print(f"la suma de los numeros pares es de 10 a 30 son: {suma}")
print(f"el promedio de los numeros pares es de 10 a 30 son: {promedio}")

print(f"la suma de los numeros impares es de 10 a 30 son: {suma2}")
print(f"el promedio de los numeros pares es de 10 a 30 son: {promedio2}")