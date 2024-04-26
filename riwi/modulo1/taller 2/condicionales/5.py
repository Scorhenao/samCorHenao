#escribe un programa que determine si un año ingresado por un usuario es bisiesto o no
ano = int(input("ingrese un año pa saber si es bisiesto: "))

if (ano%4 ==0):
    print (f"el año {ano} es bisiesto")
else:
    print (f"el año {ano} no es bisiesto")