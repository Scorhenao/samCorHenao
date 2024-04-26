def generarNumero():
    return 10

def generarTemperatura(numJugador):
    estadoJugador = 'Frio'
    numeroAdivinar = generarNumero()
    listaCaliente = []
    listaCaliente.append(numeroAdivinar + 1)
    listaCaliente.append(numeroAdivinar + 2)
    listaCaliente.append(numeroAdivinar + 3)
    listaCaliente.append(numeroAdivinar - 1)
    listaCaliente.append(numeroAdivinar - 2)
    listaCaliente.append(numeroAdivinar - 3)
    #print(listaCaliente)

    listaTibios = []
    listaTibios.append(numeroAdivinar + 4)
    listaTibios.append(numeroAdivinar + 5)
    listaTibios.append(numeroAdivinar - 4)
    listaTibios.append(numeroAdivinar - 5)

    if numJugador in listaCaliente:
        print("Caliente!!")
        estadoJugador = "Caliente"
    
    if numJugador in listaTibios:
        print("Tibio!!")
        estadoJugador = "Tibio"
    
    if numJugador == 10:
        estadoJugador = "Gana"
    
    return estadoJugador


opcion = int(input("Ingrese 1 para jugar, 2 para terminar"))
jugadores = []

contPrimera = 0
contSegunda = 0
contTercera = 0
contPerdedores = 0
while opcion != 2:
    
    nombre = input("Ingrese nombre: ")
    jugadores.append(nombre)
    for i in range(3):
        print("oportunidad " + str(i))
        numeroIntento = int(input("Ingrese numero:"))
        estado = generarTemperatura(numeroIntento)
        estado = estado.upper()
        print('****'+estado)
        if estado == "GANA":
            match (i):
                case 0:
                    contPrimera += 1
                case 1:
                    contSegunda +=1
                case 2:
                    contTercera += 1
            print("Felicidades!! ganaste")
            opcion = 2
            break    
        else:
            contPerdedores += 1


        
    opcion = int(input("Ingrese 1 para jugar, 2 para terminar"))
    print(contPrimera)
    print(contSegunda)
    print(contTercera)
    print(contPerdedores)    