#determinar los numero exactos de un numero

num= int(input("ingrese un numero: "))
count = 0

for i in range(1, num +1): #siempre es uno menos entonces suma 1
    if num % i == 0:
        count += 1
        print(i)
print(f"hay {count} divisores exactos de {num}")

if count == 2:
    print(f"el numero {num} es primo")
else:
    print(f"el numero {num} no es primo")
