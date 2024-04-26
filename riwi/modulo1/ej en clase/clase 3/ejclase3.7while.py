#muestre los valores multiplos de 5 y 7 que hay entre 1 y 100
i = 1
while i <= 100:
    if i % 5 == 0 and i % 7 == 0:
        print(i)
    i += 1
print("fin del programa")