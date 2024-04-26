opcion = input("si estas listo para jugar tibio, caliente o frio pon 'si' sino por 'no'")
list_caliente = [9,10,12,13]
list_tibio = [6,7,8,14,15,16]
list_frio = [1,2,4,5,17,18,19,20]

num_secreto = 11

i =0
count_name = 0
coun_jugadores = 0
count_adiv = 0
count_noadiv = 0

if opcion == 'si':
    while i<=3:
        name = input("ingrese su nombre: ")

        terminar = input("si quiere terminar diga 'no' y si quieres seguir diga 'si':")
    
        if terminar == 'no':
            print(f"el total de los certificados es: ")
        break 
'''
i= 0
if opcion == 'si':
    print("tienes 3 oportunidades para ganar y el numero secreto esta en un rango de 1 a 20")
    while i <= 3:
        num = int (input("digite un numero:"))
        if list_caliente.index(num):
            print("caliente")
i+=1
'''