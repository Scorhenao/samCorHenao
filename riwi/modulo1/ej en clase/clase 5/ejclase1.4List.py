#defina una lista con las siguientes edades:
# => 41,32,75,14,28,32,81,11,24,35,45,28,12,16
# => calcule el promedio de las edades
# => calcule el promedio de las personas mayores de edad
# => calcule el promedio de las personas menores de edad
# => cuente cuantas edades estan por encima del promedio de las edades en general
# => cuente cuantas edades estan por debajo del promedio de las edades en general

listaEdades = [41,32,75,14,28,32,81,11,24,35,45,28,12,16]
listaEdades.sort()

sumatoria = sum(listaEdades)
count = 0
count2 = 0

coun_may = 0
coun_men = 0
suma_may = 0
suma_men = 0

print("suma edades: " + str(sumatoria))
print("promedio de edades: " + str(sumatoria/len(listaEdades)))


for edad in listaEdades:
    if edad > 18:
        coun_may += 1
        suma_may += edad
        promedio_mayores = suma_may/coun_may
    else:
        if edad < 18:
            coun_men += 1
            suma_men += edad
            promedio_menores = suma_men/coun_men

for edad in listaEdades:
    if edad >= (sumatoria/len(listaEdades)):
        count += 1
    else:
        count2 += 1

print(f"{count} superan promedio de edad")
print(f"{count2} no superan promedio de edad")

print(f"el promedio de los mayores es: {promedio_mayores}")
print(f"el promedio de los menores es: {promedio_menores}")

