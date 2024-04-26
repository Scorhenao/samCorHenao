#una persona enferma, que pesa 70kg, se encuentra en reposo y desea saber cuantas calorias consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son unicamente dormir o estar sentado en reposo. Estando dormido consume 1.28 calorisas por minuto y estando sentado en reposo consume 1.73 calorias por minuto

print("seleccione la actividad que esta realizando: \n1.sentarse. \n2.dormir. ")
opcion = str(input("seleccione '1', '2' : "))

t = int(input("ahora digite el tiempo que se encuentra realizando dicha actividad en minutos: "))

tiempo = t
sentarse = 1.73 
dormir = 1.28
calorias1 = sentarse * tiempo
calorias2 =  dormir * tiempo

if opcion == '1':
    print (f"las calorias que ust consumio en {tiempo}min equivalen a: {calorias1}")
else:
    if opcion == '2':
        print (f"las calorias que ust consumio en {tiempo}min equivalen a: {calorias2}")
