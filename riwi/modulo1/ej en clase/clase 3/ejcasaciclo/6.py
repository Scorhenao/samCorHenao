#promedio de los 5 numeros ingresados por usuario usando ciclos
i = 1
suma = 0
count = 0
while i <= 5:
    num = int(input("ingrese numero: "))
    count += 1
    suma = suma + num
    i += 1
print("el valor de la sumatoria es: " + str(suma))

#promedio
promedio = suma // count
print(f"el valor del promedio es: {promedio} " )
