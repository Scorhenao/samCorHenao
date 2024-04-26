#elabora un programa que solicite al usuario ingresar tres numeros y luego imprima si estos pueden formar un triangulo valido

a = int(input("ingrese un angulo del triangulo: "))
b = int(input("ingrese un otro del triangulo: "))
c = int(input("ingrese un denuevo del triangulo: "))

if a+b+c>180:
    print("no puede ser un trangulo pq la suma de sus lados no da 180")
else:
    print("con estos angulos si se puede crear un triangulo")