#Escribe un programa que calcule la suma de los primeros N números naturales, donde N es ingresado por el usuario.

i = 1
suma = 0
N = int(input("ingrese numero: "))

while i <= N:
    suma = i + N
    i += 1
print("la suma de los primeros numero N son: " + str(suma))