#cuente = sumar 1 y muestre los valores multiplos de 5 y 7 que hay entre 5 y 100
count = 0 #cantidad e numero que cumplen la condicion
i = 1
while i <= 100:
    if i % 5 == 0 and i % 7 == 0:
        count +=1 #cantidad e numero que cumplen la condicion
        print(i)
    i += 1
print(f"hay {count} numeros multiplos de 5 y 7 ") #cantidad e numero que cumplen la condicion
print(f"fin programa")