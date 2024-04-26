#uan empresa decide otorgar un bono de temporada pero desea hacerlo deacuerdo al estrato de los trabajadores de la siguiente manera:

#si el trabajador es estrato 1 le daran un bono del 35% del salario
#si es estrato 2 el bono sera de 25%
#si es estrato 3 del 20%
#si es estrato 4 de 15%
#los demas tendran un bono del 10%

#haga un programa que calcule el bono y el total a pagar



estrato = input("ingrese su estrato '1','2', '3', '4' o ''otro': ")
salario = float(input("ingrese su salario"))

estrato1 = salario * (35/100)
estrato2 = salario * (25/100)
estrato3 = salario * (20/100)
estrato4 = salario * (15/100)
demas = salario * (10/100)

total_con_bono1 = salario + estrato1
total_con_bono2 = salario + estrato2
total_con_bono3 = salario + estrato3
total_con_bono4 = salario + estrato4
total_con_bono_demas = salario + demas


match estrato:     #evalua la variable
    case '1':
        print(f"su salario es: {salario} mas el bono por su estrato que es 1 es: {total_con_bono1}")
    case '2':
        print(f"su salario es: {salario} mas el bono por su estrato que es 2 es: {total_con_bono2}")
    case '3':
        print(f"su salario es: {salario} mas el bono por su estrato que es 3 es: {total_con_bono3}")
    case '4':
        print(f"su salario es: {salario} mas el bono por su estrato que es 4 es: {total_con_bono4}")
    case 'otro':     #contingencia por valor no valido
        print(f"su salario es: {salario} mas el bono por su estrato que es 4 es: {demas}")

