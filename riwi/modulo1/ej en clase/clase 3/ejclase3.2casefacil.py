#forma facil

bono = input("ingrese su estrato '1','2', '3', '4' o ''otro': ")
salario = float(input("ingrese su salario"))

match bono:     #evalua la variable
    case '1':
        bono = salario * 0.35
    case '2':
        bono = salario * 0.25
    case '3':
        bono = salario * 0.20
    case '4':
        bono = salario * 0.15
    case 'otro':     #contingencia por valor no valido
        bono = salario * 0.10

total = salario + bono
print (" su bono fue de " + str(bono) + " y el total con bono es de: " + str(total))