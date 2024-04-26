
listaEdades = [25, 42, 35, 54, 39, 31, 46, 31, 16]

#print(listaEdades, end = "") los separa


#tome un rango de la lista

print(listaEdades[0:4])#python posicion final siempre es una menos osea 4 estara en la 3

print(listaEdades[2:7])

print(listaEdades[4:]) #un vacio en rango hace que vaya desde el inicio o desde el final

print(listaEdades[:7]) #un vacio en rango hace que vaya desde el inicio o desde el final

#notacion inversa
print(listaEdades[-1]) #contando de derecha a izquierda - contando de izquierda a derecha +

print(listaEdades[0:-3]) #resta hasta el lado

print(listaEdades[-5:-1])

print(type(listaEdades))

print(type(listaEdades[4])) #mostrar el 4

listaEdades[3] = 4.88
print (type(listaEdades[3])) #cambiar por float

#listaEdades[6] = "robert" #cambiar por str
#print (type(listaEdades[6]))

#forma con while

i = 0 #indice, posicion empieza lista
while i < len(listaEdades):#retornar cantidad de datos de lista
    print(listaEdades[i])
    i += 1
    
#forma con for

print("primera forma de for")
for i in range (len(listaEdades)):#por defecto desde cero
    print(listaEdades[i])

print("segunda forma de for")
suma = 0
for edad in listaEdades:#tomar cada dato de lista y pone en variable edad
    suma += edad
    print(edad)
print("sumar edaddes: " + str(suma))

sumatoria = sum(listaEdades)
print("suma edades: " + str(sumatoria))

sumatoria_prom = sum(listaEdades)
print("suma edades: " + str(sumatoria))
print("promedio: " + str(sumatoria_prom/len(listaEdades)))


