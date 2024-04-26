#Crea un programa que solicite al usuario ingresar 10 números enteros y luego calcule la suma de los números negativos.
sumar = 0

for i in range(-0, 11):
    num = int(input("ingrese 10 numero enteros: "))
    if num < 0:
        sumar = sumar + num
print(f"las suma de los numero negativos es: {sumar}")