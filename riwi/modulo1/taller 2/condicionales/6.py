#desarrolla un algoritmo que capture dos numeros y calcule el cuadrado del primero dividido sobre la raiz tercera del segundo

a = float(input("ingrese un numero: "))
b = float(input("ingrese un numero: "))
calculo = (a**2) / (b**(1/3))
print(f"el calculo es: {calculo} ")
