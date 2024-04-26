#Escribe un programa que calcule la suma de los números pares entre 1 y N, donde N es ingresado por el usuario.

num = int(input("ingrese numero: "))

i = 1
suma = 0

while i != 0 :
    if num % 2 == 0:
        suma += num
        num = int(input("ingrese otro numero: "))
    elif num % 2 != 0:
        num = int(input("ingrese otro numero: "))
    else:
        if num == 0:
            break
    i += 1

print(f"la sumatoria de los numeros pares es: {suma}")


