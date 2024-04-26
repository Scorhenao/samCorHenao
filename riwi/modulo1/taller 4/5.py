#Escribe un programa que solicite al usuario ingresar 10 edades y luego calcule la suma de las edades ingresadas
i = 1
suma = 0

while i <= 10:
    num = int(input("ingrese una edad: ")) 
    suma += num
    i += 1
print(f"la suma d elas edades es: {suma}")