#elabore un algoritmo que lea tres numeros y solo imprima el mayor de ellos
a = int(input("digite un numero"))
b = int(input("digite otro numero"))
c = int(input("digite denuevo un numero"))
if a>b and a>c:
    print (f"el numero mayor es {a} ")
else:
    if b>a and b>c:
        print (f"el numero mayor es {b} ")
    if c>a and c>b:
        print (f"el numero mayor es {c} ")