def sumar (num1, num2): #argumentos necesita pa funcionar
    resultado = num1 + num2
    return resultado

numero1 = int(input("ingrese un numero: "))
numero2 = int(input("ingrese otro numero: "))

suma = sumar(numero1,numero2) #parametros
print("el valor de la suma es: " + str(suma))