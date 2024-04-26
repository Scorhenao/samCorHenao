#Leer n números enteros, almacenarlos en una lista y determinar en qué posiciones se encuentran los números terminados en 4
lista = []
i = 0


opcion = int(input("digite '1' si quiere comenzar: "))
if opcion == 1:
    while opcion:
        n = input("digite un numero: ")
        lista.append(n)
        i += 1
        opcion = int(input("digite '1' si quiere comenzar y '2' para terminar: "))
        if opcion == 2:
            break
        else:    
            print("el numero q digito no es valido para nda")
else:    
    print("el numero q digito no es valido para nda")
    
print(lista)

lista_4 = []

for indice,variables in enumerate(lista):
    
    if variables[-1] == "4": #elegir posicion para comparar
        lista_4.append(indice) #agregar el indice otra lista para saberño

print("los numero terminados en 4 estan en las posiciones")
print(lista_4)
    





