#desarrolla un algoritmo que capture dos numeros y calcule el cuadrado del primero dividido sobre la raiz tercera del segundo

a = float(input("digite un numero"))
b = float(input("digite otro numero"))
calculo = (a**2) / (b**(1/3)) #raiz
print(f"el calculo es:{calculo}")