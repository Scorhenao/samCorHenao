#muestre los multiplos de 3 y 7 que hay entre 50 y 80

count = 1
for i in range(50, 81):    #solo el maximo debe ser 1 de mas
    if i % 3 == 0 and i % 7 == 0:
        count +=1
        print(i)
