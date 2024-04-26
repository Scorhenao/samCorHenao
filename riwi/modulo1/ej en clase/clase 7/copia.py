# => agregar contacto con nombre y numero de telefono 
# => ver lista de contactos exitentes
# => buscar un contacto por nombre y mostrar su numero de telefono
# => eliminar un contacto por nombre

#1 agregar
#2 ver
#3 buscar
#4 eliminar

lista_contactos = []
lista_buscar = []

opciones = int(input("digite  un numero segun la opcion: \n'1': agregar \n'2': ver \n'3': buscar \n'4': eliminar \n=>"))

i = 0

if opciones == 1:
    while opciones:
        name = str(input("digite un nombre: "))
        lista_contactos.append(name)
        numero = int(input("digite un numero: "))
        lista_contactos.append(numero)
        opciones = int(input("digite  un numero segun la opcion: \n'1': agregar \n'2': ver \n'3': buscar \n'4': eliminar \n'5': salir \n=>"))
        i += 1
        if opciones == 5:
            break
        
        if opciones == 2:
            while opciones:
                print("************")
                print("su lista de contactos son")
                print(lista_contactos)
                i += 1
                opciones = int(input("digite  un numero segun la opcion: \n'1': agregar \n'2': ver \n'3': buscar \n'4': eliminar \n'5': salir \n=>"))
                i += 1
                if opciones == 5:
                    break
                
                if opciones == 3:
                    while opciones:
                        buscar = input("ingrese el nombre de la persona para buscarla: ")
                        busqueda = lista_contactos.index(buscar)
                        print(lista_contactos[busqueda])
                        i += 1
                        opciones = int(input("digite  un numero segun la opcion: \n'1': agregar \n'2': ver \n'3': buscar \n'4': eliminar \n'5': salir \n=>"))
                        if opciones == 5:
                            break
        
                if opciones == 4:
                    while opciones:
                        borrar = int(input("el nombre de la persona que quiere eliminar de contactos: "))
                        lista_contactos.append(numero)
                        i += 1
                        opciones = int(input("digite  un numero segun la opcion: \n'1': agregar \n'2': ver \n'3': buscar \n'4': eliminar \n'5': salir \n=>"))
                        if opciones == 5:
                            break

else:
    print("digito una opcion no valida")
