#se desea saber la cantidad de hombres y mujeres, ademas hay que calcular el porcentaje de ellos while

i = 1

count = 0
count2 = 0



print("seleccione el sexo \n1.hombre. \n2.mujer. ")
opcion = str(input("seleccione '1', '2', '3' si ya no quiere poner mas hombres o mujeres : "))

while opcion:
    if opcion == '1':
        count += 1
        opcion = str(input("seleccione '1', '2' : "))
    else:
        if opcion == '2':
            count2 += 1
            opcion = str(input("seleccione '1', '2' : "))
        else:
            if opcion == '3':
                break
    i+=1

suma_hombre_mujeres = count2 + count 

porcentajehombres= (count / suma_hombre_mujeres ) *100
porcentajemujeres= (count2 / suma_hombre_mujeres ) *100

print(f"la cantidad de hombres que hay es {count}")
print(f"la cantidad de mujeres que hay es {count2}")

print(f"el porcentaje de hombre que hay es de: {porcentajehombres}%")
print(f"el porcentaje de mujeres que hay es de: {porcentajemujeres}%")
