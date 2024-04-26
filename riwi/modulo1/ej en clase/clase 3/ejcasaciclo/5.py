#calcular el promedio de los numeros del punto 3 y 4 por separado

#punto 3 contar los numeros pares multiplos de 7 entre 200 y 432
#punto 4 sumar los numero pares entre 100 y 330

ipunto1 = 200
ipunto2 = 100

suma1 = 0
count1 = 0

suma2 = 0
count2 = 0

# punto 3
while ipunto1 <= 432:
    if ipunto1 % 2 == 0 and ipunto1 % 7 == 0:
        count1 += 1
        suma1 += ipunto1
    ipunto1 += 1

# punto 4
while ipunto2 <= 330:
    if ipunto2 % 2 == 0:
        count2 += 1
        suma2 += ipunto2
    ipunto2 += 1

# Calcular promedio de actividad 1
promedio1 = suma1 // count1

#calcular promedio de actividad 2
promedio2 = suma2 // count2


# Imprimir resultados
print(f"La suma de los números pares múltiplos de 7 entre 200 y 432 es: {suma1}")
print(f"Hay {count1} números pares múltiplos de 7 entre 200 y 432")
print(f"El promedio de los números del punto 3 es: {promedio1}")

print(f"\nLa suma de los números pares entre 100 y 330 es: {suma2}")
print(f"Hay {count2} números pares entre 100 y 330")
print(f"El promedio de los números del punto 4 es: {promedio2}")