#capturar un numero indeterminado de palabras y finalizar cuando el usuario
#ingrese la palabra 'fin'

#ciclo controlado por centinela

palabra = input("ingrese palabra: ")

palabra = palabra.lower() #convertir todas las letras si estan en mayusculas convertir en minusculas

while palabra != 'fin': #or palabra != 'Fin': #otra manera de validad fin
    palabra = input("ingrese otra palabra")
    palabra = palabra.lower()
print("fin del programa")