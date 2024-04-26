#Crea un programa que solicite al usuario ingresar una serie de números enteros positivos y luego calcule la suma de dichos números. El programa debe dejar de pedir números cuando se ingrese un número negativo.

numeros = input("Ingrese una serie de números enteros positivos separados por espacios: ").split()

suma = 0
i = 0

while i < len(numeros):
        numero = numeros[i]
        num = int(numero)
        if num > 0:
            suma += num
            print("La suma de los números enteros positivos ingresados es:", suma)
        else:
            if num < 0:
                print("ingresó uno o varios numeros no positivo entonces no se realizara la operacion. ")
                break
        i += 1
