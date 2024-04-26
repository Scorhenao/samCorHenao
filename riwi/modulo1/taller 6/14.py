#Leer n números enteros, almacenarlos en una lista y determinar si existe al menos un número repetido. 
lista = []
repeticiones = {}


i = 1

opcion =int(input("digite '1' para digitar o '2' para terminar:"))

if opcion == 1:
    while opcion:
        n = int(input("digite un numero entero: "))
        lista.append(n)
        for n in lista:
            if n in repeticiones :
                repeticiones[n] += 1
            else:
                repeticiones[n] = 0


        i +=1
        opcion =int(input("digite '1' para comenzar o '2' para terminar:"))
        if opcion == 2:
            break
else:
    print("digito un numero no valido para empezar")

print(lista)

print("la cantidad de numero que estan repetidos son: ")
print(len(repeticiones))



