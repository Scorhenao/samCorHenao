#en una eps tienen una cantidad indeterminada de usuarios y por cada usuario se conoce el nombre y el RH se desea saber el porcentaje de cada tipo de sangre que existe en la eps para un programa de donacion de sangre

#su mision es calcular ese porcentaje ingresando el nombre de cada paciente y su RH

def agregarU(nameF):
    global listU
    listU.append(nameF)

def agregarRh(Rh):
    global listRh
    listRh.append(Rh)

def AverageRh(RhAverage):
    global listRh
    cant = listRh.count(RhAverage)
    resultado = len(listRh)
    if resultado == 0:
        return 0
    Porcentaje = cant / resultado * 100
    return Porcentaje

listU = []
listRh = []

i = 0

opcion = int(input("Si desea empezar el programa, digite el número '1': \n => "))

while opcion == 1:
    name = input("Ingrese el nombre del paciente: ")
    RhU = input("Ingrese el tipo de sangre del donador: ")
    
    agregarU(name)
    agregarRh(RhU)

    print(f"El porcentaje de personas con el mismo Rh de {name} es: {AverageRh(RhU)}%")
    
    opcion = int(input("Si desea terminar el programa, digite el número '2', sino ingrese de nuevo '1': "))
    
    if opcion == 2:     
        break
else:
    print("Ingresó un dato no válido para iniciar o salir del programa")

i += 0

print("Lista de nombres de pacientes:", listU)
print("Lista de tipos de sangre:", listRh)
