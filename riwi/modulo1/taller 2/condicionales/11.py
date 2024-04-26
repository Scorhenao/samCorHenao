#desarrolla un programa que solicite al usuario ingresar 3 notas y luego calcule el promedio indicando si es aprovado (promedio >=3) o reprobado (promedio <3)
n1 = int(input("ingrese su primera nota: "))
n2 = int(input("ingrese su segunda nota: "))
n3 = int(input("ingrese su tercera nota: "))
promedio = (n1+n2+n3) /3
if promedio>=3:
    print(f"aprobado su nota fue: {promedio} ")
else:
    print(f"desaprovado su nota fue: {promedio} ")

