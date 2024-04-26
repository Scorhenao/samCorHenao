#elabore un algoritmo que lea un numero entero  menor que 32768 y que efectue lo siguiente: si es multiplo de 4, imprimir el numero dividido por 4, si es multiplo de 5, imprimir la quinta parte del numero elevada al cuadrado y si no es multiplo de ninguno de los anteriores producir el mensaje 'numero extraño'

num = int(input("digite un numero menor que 32768: "))
num_div4 = num // 4
num_div5 = (num // 5) **2

if num > 32768:
    print("el numero es mayor que el indicado")
else:
    if num % 4 == 0:
        print(f"el numero {num} es multiplo de 4 y fue dividido por 4 = {num_div4}")
    else:
        if num % 5 == 0:
            print(f"el numero {num} es multiplo de 5 y fue dividido por 5 al cuadrado = {num_div5}")
        else:
            print("numero extraño")