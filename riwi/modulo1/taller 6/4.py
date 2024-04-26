#Un concesionario desea otorgar bono de acuerdo a la marca de carros vendidos por cada uno de los trabajadores de la empresa de acuerdo a la siguiente tabla (en dólares):
'''
MARCA und          BONO
BMW und            2000
MAZDA und          3000
CHEVROLET und      4000
Los demás und      4500

'''
#Asuma que usted tiene un listado de empleados con las ventas que cada uno de ellos hizo de cada uno de los tipos de vehículos de la tabla anterior. Elabore un algoritmo que calcule el bono para cada trabajador. al final deberá retornar una lista con el nombre de cada trabajador y el bono que debe pagársele. Para el algoritmo puede implementar diagrama de flujo o pseudocódigo.

def Bono_eduardo():
    name = lista_empleados.index('eduardo')
    marca = carros["BMW"]
    cantidad = cant_ventas ["eduardo"] 
    
    resultadoE = marca * cantidad
    return resultadoE

def Bono_ñoño():
    name = lista_empleados.index('ñoño')
    marca = carros["CHEVROLET"]
    cantidad = cant_ventas ["ñoño"] 
    
    resultadoÑ = marca * cantidad
    return resultadoÑ

def Bono_pepe():
    name = lista_empleados.index('pepe')
    marca = carros["MAZDA"]
    cantidad = cant_ventas ["pepe"] 
    
    resultadoP = marca * cantidad
    return resultadoP

def Bono_lucas():
    name = lista_empleados.index('lucas')
    marca = carros["DEMAS"]
    cantidad = cant_ventas ["lucas"] 
    
    resultadoD = marca * cantidad
    return resultadoD



lista_empleados = ["eduardo", "ñoño", "pepe", "lucas"]
cant_ventas = {"eduardo":2,"ñoño":3,"pepe":4,"lucas":25}
carros = {"BMW":2000,"MAZDA":3000,"CHEVROLET":4000,"DEMAS":4500,}

print("la lista de empelados son: ") 
print(lista_empleados)

opcion = (input("digite el nombre de un empleado: "))

if opcion == 'eduardo':
    bonoEduardo = Bono_eduardo()
    print(f"el bono que merece eduardo es: {(bonoEduardo)}")
elif opcion == 'ñoño':
    bonoÑoño = Bono_ñoño()
    print(f"el bono que merece eduardo es: {(bonoÑoño)}")
elif opcion == 'pepe':
    bonoPepe = Bono_pepe()
    print(f"el bono que merece eduardo es: {(bonoPepe)}")
elif opcion == 'lucas':
    bonoLucas = Bono_lucas
    print(f"el bono que merece eduardo es: {(bonoLucas)}")
else:
    print("este nombre no esta en la lista de empleados")