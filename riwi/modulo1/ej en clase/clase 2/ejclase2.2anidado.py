#elabore un programa que capture un salario y verifique si el salario es un minimo legal vigente o es un salario integral
salario = float(input("sr usuario digite su salario: "))
if salario == 1300000:
    print(f"el salario: {salario} lamentablemente es un minimo")
else:
    if salario >= 13000000: 
        print(f"el salario: {salario} es un salario integral o mas que integral :3 ")
    else:
        if salario<13000000 :
            print(f"el salario: {salario} una deshonra")
        else:
            if salario>1300000 and salario<13000000:
                print(f"el salario: {salario} es aceptable")    
            
