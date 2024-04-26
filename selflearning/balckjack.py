
import random

lista_cartas = [1,2,3,4,5,6,7,8,9,10]#los ases pueden ser 1 o 11 segun eleccion del jugador
lista_resultados = []


#print("cada numero significa una opcion porfavor memoricelos: \n2.s. \n3.resta. \n4..")
print("hola jugador, los valores que cada carta en este black jack son:\n carta_dos vale: 2\n carta_diez vale: 10 \n figuras vale: 10\n AsesA vale:1\n AsesB vale: 11")

def cartas_jugador ():
    aleatorio_jugador = random.choice(lista_cartas)
    return aleatorio_jugador

def cartas_maquinita ():
    aleatorio_maquinita = random.choice(lista_cartas)
    return aleatorio_maquinita

i = 1
i2 = 1

suma1 = 0 
suma2 = 0


print("hola jugador ingrese el numero: 'iniciar' para tomar sus cartas")

opcion_start = (input("=>"))
if opcion_start == 'iniciar':
    while i <= 2:
        print(f"su baraja de cartas son:{cartas_jugador()} ")
        
        lista_resultados.append(cartas_jugador)
        suma1 += suma1 + lista_resultados
        print(f"la suma de sus cartas es: {suma1}")

        i += 1

    while i2 <= 2:
        cartas_jugador()
        print(f"la suma de sus cartas es: ")
        i2 += 1
else:
    print("eligio algo diferente para iniciar el juego")

