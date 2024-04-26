#elabore un algoritmo que lea el nombre de un estudiante y las 3 notas obtenidas en los examenes de una materia. El algoritmo debe calcular la nota definitiva y producir un mensaje de felicitacion si la materia fue aprovada, o un mensaje de reproche si la materia fue perdida. La materia se aprueba si obtiene como definitiva una nota mayor o igual a 3.0

name = str(input("digite nombre de estudiante: "))

n1 = float(input("digite la primera nota de: "))
n2 = float(input("digite la segunda nota de: "))
n3 = float(input("digite la tercera nota de: "))

nfinal = (n1 + n2 + n3) / 3

if n1 < 0 or n2 < 0 or n3 < 0:
    print ("las notas que digito no estan en el criteo de evaluacion")
else:
    if n1 > 5 or n2 > 5 or n3 > 5:
        print ("las notas que digito no estan en el criteo de evaluacion")
    else:
        if nfinal >= 3.0 and nfinal < 5:
            print (f"su nota definitiva es de: {nfinal} felicidades {name} aprovaste :3")
        else:
            if nfinal < 3.0:
                print(f"su nota definitiva es de: {nfinal} tristemente {name} has reprovado la materia :C")
            
