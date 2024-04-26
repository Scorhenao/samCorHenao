#Problema 1

#Enunciado:

'''
Escriba un programa en Python que solicite al usuario que calcule la suma y la cantidad de los números pares que hay en la siguiente lista:
[55, 84, 257, 954. 2211, 356, 17, 14, 2547, 8452]

Requerimientos:

El programa debe identificar el número más grande de la lista ingresada por el usuario.

El programa debe identificar el número más pequeño de la lista ingresada por el usuario.

El programa debe calcular el promedio de los números de la lista ingresada por el usuario.

El programa debe mostrar al usuario el número más grande, el número más pequeño y el
promedio de los números de la lista.

2
El programa debe estar escrito en el lenguaje de programación Python.'''

def sumaPares():
    suma = 0
    for num in listaNum:
        if num % 2 == 0:
            suma += num
            result = suma
    return result

def contar():
    contar = 0
    for num in listaNum:
        if num % 2 == 0:
            contar += 1
            result = contar
    return result

def promedioList():
    promedio = sum(listaNum) / len(listaNum) 
    return promedio


def Masgrande():
    return max(listaNum)

def Maspeque():
    return min(listaNum)


listaNum = [55, 84, 257, 954, 2211, 356, 17, 14, 2547, 8452]


print(f"la cantidad de pares en la lista es: {contar()}")
    
print(f"El numero mas grande de la lista es: {Masgrande()}")

print(f"El numero mas pequeño de la lista es: {Maspeque()}")

print(f"la suma de los pares es: {sumaPares()}")

print(f"el promedio de la lista es: {promedioList()}")