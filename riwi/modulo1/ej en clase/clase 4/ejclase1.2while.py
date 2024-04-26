#suma
num = int(input("ingrese numero: "))
suma = 0
while num != 0:
    suma += num
    num = int(input("ingrese otro numero: "))
print(f"la sumatoria de los numero es: {suma}")