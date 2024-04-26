#capture 5 notas y calcule el promedio con ciclo
i = 1
suma = 0
count = 0
while i <= 5:
    num = int(input("ingrese una nota: "))
    count += 1
    suma = suma + num
    i += 1
print("el valor de la sumatoria es: " + str(suma))

#promedio
promedio = suma // count
print(f"el valor del promedio es: {promedio} " )
