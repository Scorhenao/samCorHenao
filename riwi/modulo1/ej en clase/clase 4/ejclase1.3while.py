num = int(input("ingrese numero: "))

suma = 0
count = 0

while num != 0:
    count += 1 
    suma += num
    num = int(input("ingrese otro numero: "))
    
promedio = suma / count

print(f"la sumatoria de los numero es: {suma}")
print(f"el promedio de los numeros es: {promedio}")
