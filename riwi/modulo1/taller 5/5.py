#calcular el promedio de 5 notas que tiene una materia y ademas calcular cual es la nota mas alta y la mas baja

i = 1
count = 0
suma = 0
mayor = max
menor = min

while i<=5 :
    notas = int(input("digite una nota:"))
    count += 1
    suma = suma + notas

    if notas > mayor :
        mayor = notas
        
    if notas < menor :
        menor = notas
    i += 1

promedio = sum / count

print (f"el promedio de las notas es: {promedio}")
print(f"el numero mayor es {mayor}")
print(f"el numero es {menor} es menor")
