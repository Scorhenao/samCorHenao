#Problema 2

#Enunciado:

'''
Descripción del Problema

Imagina que una compañía de seguros ofrece pólizas de seguro de vida con primas
variables, que dependen de la edad del asegurado.

Si la edad está entre 18 y 30 años, la
prima es del 5%.

Para edades entre 31 y 50 años, la prima es del 8%.

Si la edad supera los 50 años, la prima es del 12%.

Desarrolla un programa que calcule el total de primas

generadas por las diferentes personas que han adquirido estas pólizas de seguro de vida.

Requerimientos

El programa debe permitir al usuario ingresar la edad de cada asegurado. El ingreso de datos debe continuar hasta que el usuario decida finalizar.

Para cada edad ingresada, el programa debe determinar la prima correspondiente según
las siguientes condiciones:

- Si la edad está entre 18 y 30 años, la prima es del 5%.
- Para edades entre 31 y 50 años, la prima es del 8%.
- Si la edad supera los 50 años, la prima es del 12%.

El programa debe calcular y mantener un registro de la suma total de todas las primas

generadas por los asegurados.

- Visualización del Total de Primas: Al finalizar el ingreso de datos, el programa debe
mostrar el total de primas generadas por todas las personas aseguradas.

- Implementación en Python: El programa debe estar escrito en el lenguaje de
programación Python.'''

#prima = porcentaje

def totalPrimas ():
    suma = sum (listPrimas)
    result = print(f"el total de la suma de las primas que digito es: {suma}")
    return result

listPrimas = []

prima1 = 5/100 *100
prima2 = 8/100 *100
prima3 = 12/100 *100

star = int(input("ingrese '1' para iniciar el programa: "))

while star == 1:
    edad = int(input("ingrese la edad del asegurado: "))
    
    #condiciones
    if edad >= 18 and edad <= 30:
        listPrimas.append(prima1)
        print(f"la prima de este asegurado es del {prima1}% ")
    elif edad >= 31 and edad <= 50:
        listPrimas.append(prima2)
        print(f"la prima de este asegurado es del {prima2}% ")
    elif edad > 50:
        listPrimas.append(prima3)
        print(f"la prima de este asegurado es del {prima3}% ")
    elif edad < 18:
        print("este no tiene ninguna prima :c")
    
    #salir del programa
    opccion = int(input("ingrese '2' si desea salir del programa sino si quiere seguir '1': "))
    if opccion != 1 and opccion !=2:
        print("ingreso un dato no valido")
        break
    if opccion == 2:
        break
else:
    print("no se inicia el programa pq ingreso algo no valido: ")


print(f"el total de primas que ingreso es: {listPrimas}")
print(totalPrimas())