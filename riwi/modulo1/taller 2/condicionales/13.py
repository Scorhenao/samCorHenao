#escribe un programa que pida al usuario el radio de un circulo y luego calcule su area, pero solo si el radio es positivo
x = int(input("ingrese el radio de un circulo: "))
py = 3.14159
area = py * x**2
if x>0:
    print(f"el area de su circulo es: {area} ")
else:
    print("no se puede calcular pq es negativo")
