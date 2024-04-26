#sumar los numero pares entre 100 y 330
i = 100
suma = 0
while i <= 330:
    if i%2 == 0:
        suma = suma + i
    i += 1
print(f"la suma de los numero pares entre 100 y 330 son: {suma}")
