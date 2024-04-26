datos = {
    "nombre": "luisa",
    "temperatura": 28,
    "correo": "sam@gmail.com",
    "estrato": 3,
    "estatura": 7,
    1:8,
    "colores":["Azul", "Blanco", "verde"] #un solo dato, agrego una lista o tupla dentro del diccionario
}

print(datos)

print(datos ["nombre"]) #especificar que quieres sacar del diccionario

datos["nombre"] = "laura" #cambiar datos de litas

print(datos)

datos ["telefono"] = 3113369669 #agregar datos se agraga al final

print (datos)

print(datos["telefono"])

print(type(datos["temperatura"])) #sacar tipo dato de diccionario


datos["name"] = datos.pop ("nombre") #cambia por key

#imprimir datos o keys

for dato in datos: 
    print(dato) #saca key
    print(datos[dato]) #saca valor
    
print(len(datos)) #cantidad de datos en diccionario

print(datos["colores"][0]) #sacar lista que este dentro de un diccionario