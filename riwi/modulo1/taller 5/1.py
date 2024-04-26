#capture un numero y muestre los multiplos de 3 que hay entre 1 y el numero ingresado

num = int(input("ingrese un numero: "))
count = 0

for i in range(0, num + 1):    #solo el maximo debe ser 1 de mas
    if i % 3 == 0:
        count +=1
        print(i)
print(f"la cantidad que muliplos de 3 que hay entre 1 y {num} son: {count}")
