#contar los numeros pares multiplos de 7 entre 200 y 432
i = 200
count = 0
while i <= 432:
    if i % 2 == 0 and i % 7 == 0:
        count +=1
        print(i)
    i += 1
print(f"hay {count} numeros pares multiplos de 7 entre 200 y 432")
print("fin del programa")