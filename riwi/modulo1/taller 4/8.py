#Elabora un programa que solicite al usuario ingresar 7 números enteros y luego cuente cuántos de esos números son divisibles por 3.

count = 0 #cantidad e numero que cumplen la condicion
i = 1
while i <= 7:
    num = int(input("ingrese un numero entero: "))
    if i // 3 == 0:
        count +=1 #cantidad e numero que cumplen la condicion
    i += 1
print(f"hay {count} numeros divisibles por 3 ") #cantidad e numero que cumplen la condicion
