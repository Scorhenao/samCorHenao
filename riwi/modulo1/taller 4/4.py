#Elabora un programa que solicite al usuario ingresar una serie de números enteros y luego cuente cuántos de esos números son pares.

numeros = input("Ingrese una serie de números enteros separados por espacios: ").split()

i = 0
count = 0

while i < len(numeros):

        numero = numeros[i]
        num = int(numero) #transformar a entero 

        if num % 2 == 0:
            count += 1
            print(f"el numero {numero} entero es par")
        else:
            if num % 2 != 0:
                print(f"el numero {numero} entero es impar")
        i += 1
print(f"hay {count} pares ") 
