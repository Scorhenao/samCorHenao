#desarrolla un programa que determine si un año ingresado por el usuario es un año de elecciones (divisible por 4)
ano = int(input("digite un año: "))
if ano%4 == 0:
    print(f"el año: {ano} es un año de elecciones")
else:
    print("este año no hay elecciones")