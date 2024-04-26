#tomando como base los resultados obtenidos en un laboratorio de analisis clinicos, un medico determina si una persona tiene anemia o no, lo cual depende de su nivel de hemoglobina en la sangre y su edad.

# Si el nivel de hemoglobina que tiene una persona es menor que el rango que le corresponde, se determina su resutlado como positivo y en caso contrario como negativo.

# la tabla en la que el medico se basa para obtener el resultado siguiente:

# se debe responder de acuerdo al genero si la persona tiene anemia o no, por ejemplo: "la mujer tiene anemia"  

name = input("digite el nombre del paciente: ")

print("seleccione el tipo de ciente: \n1.hombre. \n2.mujer. ")
genero_paciente = str(input("seleccione '1', '2': "))


age = int(input("digtite la edad del paciente en años: "))

level_hemoglobina = float(input("digite el nivel de hemoglobina del paciente: "))

#hombre mayor de 18 normal = 13.2 a 16.6 
#niño de 1 a 11 años normal = 11 a mas
#niño de 12 a 14 años normal = 12 a mas
#hemoglobina alta en hombre es de 16.6 mas

#hombres
if genero_paciente == '1' and age>=18 and level_hemoglobina >= 13.2 and level_hemoglobina < 16.6:
    print (f"la hemoglobina del paciente: {name} es normal")
else:
    if genero_paciente == '1' and age>=18 and level_hemoglobina < 13.2:
        print (f"el paciente: {name} tiene anemia")
    else:
        if genero_paciente == '1' and age>=1 and age<=11 and level_hemoglobina >= 11:
            print(f"la hemoglobina del paciente: {name} al ser su edad menor o igual a 11 años es normal")
        else:
            if  level_hemoglobina < 11:
                print(f"el paciente: {name} tiene anemia")
            else:
                if genero_paciente == '1' and age>11 and age<=14 and level_hemoglobina >= 12:
                    print (f"la hemoglobina del paciente: {name} es normal")
                else:
                    if level_hemoglobina >= 16.6:
                        print (f"el paciente: {name} tiene la hemoglobina muy alta")

#mujer mayor de 18 normal = 11.6 a 15 
#niña de 1 a 11 años normal = 11 a mas
#niña de 12 a 14 años normal = 12 a mas
#hemoglobina alta en mujer es de 15 mas

#mujeres

if genero_paciente == '2' and age>=18 and level_hemoglobina >= 11.6 and level_hemoglobina < 15:
    print (f"la hemoglobina del paciente: {name} es normal")
else:
    if genero_paciente == '2' and age>=18 and level_hemoglobina < 13.2:
        print (f"el paciente: {name} tiene anemia")
    else:
        if genero_paciente == '2' and age>=1 and age<=11 and level_hemoglobina >= 11:
            print(f"la hemoglobina del paciente: {name} al ser su edad menor o igual a 11 años es normal")
        else:
            if  level_hemoglobina < 11:
                print(f"el paciente: {name} tiene anemia")
            else:
                if genero_paciente == '2' and age>11 and age<=14 and level_hemoglobina >= 12:
                    print (f"la hemoglobina del paciente: {name} es normal")
                else:
                    if level_hemoglobina >= 15:
                        print (f"el paciente: {name} tiene la hemoglobina muy alta")
