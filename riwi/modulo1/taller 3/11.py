# en un juego de preguntas a las que se responde Si o No gana quien responda correctamente las tres preguntas, las preguntas son:

#¿colon descubrio america?
#¿la independencia de colombia fue en el año 1810?
#¿tokyo es un pais?

#Determinar cuantas preguntas respondio bien la persona y si gano el juego, se gana respondiendo 2 preguntas de las 3. valide todo lo necesario



#pregunta 1
print("¿colon descubrio america? seleccione la respuesta correcta: \n1.Si. \n2.No. ")
pregunta1 = (input("seleccione '1', '2': "))


#pregunta 2
print("¿la independencia de colombia fue en el año 1810? seleccione la respuesta correcta: \n1.Si. \n2.No. ")
pregunta2 = (input("seleccione '1', '2': "))


#pregunta 3
print("¿tokyo es un pais? seleccione la respuesta correcta: \n1.Si. \n2.No. ")
pregunta3 = (input("seleccione '1', '2': "))

ganar = 0 


#respuesta 1
if pregunta1 == '1':
    ganar += 1
    print ("primera correcta :3")
else:
    print("la primera es incorrecta :C")

#respuesta 2
if pregunta2 == '1':
    ganar += 1
    print ("segunda correcta :3")
else:
    print("la segunda es incorrecta :C")

#respuesta 3
if pregunta3 == '2':
    ganar +=1
    print ("la tercera correcta :3")
else:
    print("la tercera es incorrecta :C")

#resultado
if ganar >= 2:
    print ("gano el test")
else:
    print ("perdio el test")
