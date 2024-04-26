#calcular la sumatoria de los pares e impares que hay entre 10 y 30

suma = 0
suma2 = 0

for i in range(10, 31):    #solo el maximo debe ser 1 de mas
    if i % 2 == 0:
        suma += i
    else:
        suma2+= i

print(f"la suma de los numeros pares es de 10 a 30 son: {suma}")
print(f"la suma de los numeros impares es de 10 a 30 son: {suma2}")
