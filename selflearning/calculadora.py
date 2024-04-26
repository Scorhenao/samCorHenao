a = int(input("usuario digite un numero: "))
b = int(input("usuario otro un numero: "))
operacion = input("escriba suma, resta, multiplicacion o division osea la operacion que quiere realizar: ")

suma = a+b
resta = a-b
multiplicacion = a*b
division = a/b

if operacion == 'suma':
    print("las suma de sus numeros es: ",suma)

if operacion == 'resta':
    print("las resta de sus numeros es: ",resta)

if operacion == 'multiplicacion':
    print("la multiplicacion de sus numeros es: ",multiplicacion)

if operacion == 'division':
    print("las division de sus numeros es: ",division)
