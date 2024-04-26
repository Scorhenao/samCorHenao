#Problema 3

#Enunciado:

'''
Un Zoólogo pretende determinar el porcentaje de animales con alguna patología que los afecta que hay en las siguientes tres categorías de

El zoológico todavía no está seguro del animal que va a
estudiar.

Si se decide por elefantes solo tomara una muestra de 20 de ellos;
si se decide por las jirafas, tomara 15 muestras,
si son chimpancés tomara 40.

Su misión es hacer un programa que calcule por especie el porcentaje de animales que tiene o no la patología por especie en cada categoría.


Requerimientos:

El programa debe permitir al usuario seleccionar la especie de animal a estudiar entre elefantes, jirafas y chimpancés.

Si el usuario elige elefantes, el programa debe tomar una muestra de 20 elefantes para el estudio.

Si elige jirafas, el programa debe tomar una muestra de 15 jirafas.

Si elige chimpancés, el programa debe tomar una muestra de 40 chimpancés.

El programa debe solicitar al usuario ingresar el número de animales con patología para cada categoría de edad:

• Categoría 1: de 0 a 1 año.
• Categoría 2: más de 1 año y menos de 3.
• Categoría 3: 3 o más años.

Para cada categoría de edad, el programa debe calcular y mostrar el porcentaje de animales con o sin patología.'''
#elefantes
def ElefantesSick0y1año (cant):
    porcentaje = cant / 20 * 100
    return porcentaje

def ElefantesSick1y3años (cant):
    porcentaje = cant / 20 * 100
    return porcentaje


def ElefantesSick3omas (cant):
    porcentaje = cant / 20 * 100
    return porcentaje

#jirafas
def JirafasSick0y1año (cant):
    porcentaje = cant / 15 * 100
    return porcentaje

def JirafasSick1y3años (cant):
    porcentaje = cant / 15 * 100
    return porcentaje


def JirafasSick3omas (cant):
    porcentaje = cant / 15 * 100
    return porcentaje

#chimpances
def ChimpanceSick0y1año (cant):
    porcentaje = cant / 40 * 100
    return porcentaje

def ChimpanceSick1y3años (cant):
    porcentaje = cant / 40 * 100
    return porcentaje


def ChimpanceSick3omas (cant):
    porcentaje = cant / 40 * 100
    return porcentaje


listaElefantes = []
listaJirafa = []
listaChimpance = []


star = int(input("ingrese '1' para iniciar el programa: "))

while star == 1:
    #elegir animal
    opcciones = int(input("ingrese ingrese un numero segun la opcion: \n '3': elefantes \n '4': jirafas \n '5': chimpances \n =>"))
    
    #elefantes
    if opcciones == 3:
        print("************")
        print(" ingrese el numero de elefantes enfermos segun estas opcciones")
        
        ElefantesSick = int(input("\n '6': enfermos de 0 a 1 año: \n '7': enfermos de mas de 1 año y menos de 3: \n '8': enfermos de 3 o mas años: \n =>"))
        
        
        #6 => de o a 1 año 
        #7 => más de 1 año y menos de 3
        #8 => 3 o más años
        
        match ElefantesSick:
            case 6:
                cant1año = int(input("ingrese la cantidad de elefantes enfermos: "))
                #da mas de los que estan en estudio
                if cant1año > 20:
                    print("supera la cantidad de elefantes para el estudio")
                    break
                
                #porcentaje
                listaElefantes.append(cant1año)
                print(f"el porcentaje de elefantes de 0 a 1 años con patologia es: {ElefantesSick0y1año(cant1año)}%")
            case 7:
                cant1masaños= int(input("ingrese cantidad de elefantes enfermos: "))
                #da mas de los que estan en estudio
                if cant1masaños > 20:
                    print("supera la cantidad de elefantes para el estudio")
                    break
                
                #porcentaje
                listaElefantes.append(cant1masaños)
                print(f"el porcentaje de elefantes de mas de 1 años y menos de 3 es: {ElefantesSick1y3años(cant1masaños)}%")
                
            case 8:
                cant3masaños= int(input("ingrese cantidad de elefantes enfermos: "))
                #da mas de los que estan en estudio
                if cant3masaños > 20:
                    print("supera la cantidad de elefantes para el estudio")
                    break
                
                #porcentaje
                listaElefantes.append(cant3masaños)
                print(f"el porcentaje de elefantes de mas de 3 es: {ElefantesSick3omas(cant3masaños)}%")
                
            case _:
                print("no selecciono una edad")
        #terminar programa
        opcciones = int(input("ingrese '1' para seguir el programa o '2' para pararlo"))
        if opcciones == 2:
            break
    
    #jirafas
    if opcciones == 4:
        print("************")
        print(" ingrese el numero de jirafas enfermos segun estas opcciones")
    
        JirafasSick = int(input("\n '9': enfermos de 0 a 1 año: \n '10': enfermos de mas de 1 año y menos de 3: \n '11': enfermos de 3 o mas años: \n =>"))
        
        #9 => de o a 1 año 
        #10 => más de 1 año y menos de 3
        #11 => 3 o más años
        
        match JirafasSick:
            case 9:
                cant1añoJ = int(input("ingrese la cantidad de jirafas enfermas: "))
                #da mas de los que estan en estudio
                if cant1añoJ > 15:
                    print("supera la cantidad de jirafas para el estudio")
                    break
                
                #porcentaje
                listaJirafa.append(cant1añoJ)
                print(f"el porcentaje de jirafas de 0 a 1 años con patologia es: {JirafasSick0y1año(cant1añoJ)}%")
                
            case 10:
                cant1masañosJ= int(input("ingrese cantidad de jirafas enfermos: "))
                #da mas de los que estan en estudio
                if cant1masañosJ > 15:
                    print("supera la cantidad de jirafas para el estudio")
                    break
                
                #porcentaje
                listaJirafa.append(cant1masañosJ)
                print(f"el porcentaje de jirafas de mas de 1 años y menos de 3 es: {JirafasSick1y3años(cant1masañosJ)}%")
                
            case 11:
                cant3masañosJ= int(input("ingrese cantidad de jirafas enfermos: "))
                #da mas de los que estan en estudio
                if cant3masañosJ > 15:
                    print("supera la cantidad de jirafas para el estudio")
                    break
                
                #porcentaje
                listaJirafa.append(cant3masañosJ)
                print(f"el porcentaje de jirafas de mas de 3 es: {JirafasSick3omas(cant3masañosJ)}%")
                
            case _:
                print("no selecciono una edad")
        
        #terminar programa
        opcciones = int(input("ingrese '1' para seguir el programa o '2' para pararlo"))
        if opcciones == 2:
            break
        
    #chimpances
    if opcciones == 5:
        print("************")
        print(" ingrese el numero de chimpances enfermos segun estas opcciones")
    
        ChimpanceSick = int(input("\n '12': enfermos de 0 a 1 año: \n '13': enfermos de mas de 1 año y menos de 3: \n '14': enfermos de 3 o mas años: \n => "))
        
        #12 => de o a 1 año 
        #13 => más de 1 año y menos de 3
        #14 => 3 o más años
        
        match ChimpanceSick:
            case 12:
                cant1añoC = int(input("ingrese la cantidad de chimpances enfermos: "))
                #da mas de los que estan en estudio
                if cant1añoC > 40:
                    print("supera la cantidad de chimpances para el estudio")
                    break
                
                #porcentaje
                listaChimpance.append(cant1añoC)
                print(f"el porcentaje de chimpances de 0 a 1 años con patologia es: {ChimpanceSick0y1año(cant1añoC)}%")
            case 13:
                cant1masañosC= int(input("ingrese cantidad de chimpances enfermos: "))
                #da mas de los que estan en estudio
                if cant1masañosC > 40:
                    print("supera la cantidad de chimpances para el estudio")
                    break
                
                #porcentaje
                listaChimpance.append(cant1masañosC)
                print(f"el porcentaje de chimpances de mas de 1 años y menos de 3 es: {ChimpanceSick1y3años(cant1masañosC)}%")
                
            case 14:
                cant3masañosC= int(input("ingrese cantidad de chimpances enfermos: "))
                #da mas de los que estan en estudio
                if cant3masañosC > 40:
                    print("supera la cantidad de chimpances para el estudio")
                    break
                
                #porcentaje
                listaChimpance.append(cant3masañosC)
                print(f"el porcentaje de chimpances de mas de 3 es: {ChimpanceSick3omas(cant3masañosC)}%")
                
            case _:
                print("no selecciono una edad")
        
        #terminar programa
        opcciones = int(input("ingrese '1' para seguir el programa o '2' para pararlo"))
        if opcciones == 2:
            break
        
else:
    print("ingreso un numero no valido para iniciar ")