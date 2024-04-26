#crea un programa que solicite al usuario un numero y determine si es un numero perfecto (la suma de sus divisores propios es igual al propio numero)

num = int(input("ingrese un numero: "))
count = 0

for i in range(num):
    count +=1     
if count == num:
    print(f"el numero {num} es un perfecto")
nose